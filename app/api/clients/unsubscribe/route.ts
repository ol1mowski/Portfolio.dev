import { NextRequest, NextResponse } from 'next/server';
import { deleteClient } from '@/lib/api/client/client.service';
import { createHash } from 'crypto';

const verifyUnsubscribeToken = (email: string, token: string): boolean => {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'default-secret-key';
  const expectedToken = createHash('sha256')
    .update(`${email}${secret}`)
    .digest('hex')
    .substring(0, 16);

  return token === expectedToken;
};

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: 'Token jest wymagany' }, { status: 400 });
    }

    const { dbConnect } = await import('@/db/db_connect');
    await dbConnect();
    const { Customers } = await import('@/db/Schemas/Clients');

    const allCustomers = await Customers.find({});
    let targetEmail = null;

    for (const customer of allCustomers) {
      if (verifyUnsubscribeToken(customer.email, token)) {
        targetEmail = customer.email;
        break;
      }
    }

    if (!targetEmail) {
      return NextResponse.json(
        { success: false, error: 'Nieprawidłowy token bezpieczeństwa' },
        { status: 403 }
      );
    }

    const result = await deleteClient(targetEmail);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message:
            'Pomyślnie usunięto z bazy danych. Nie będziesz już otrzymywać naszych wiadomości.',
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Nie udało się usunąć z bazy danych' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Błąd podczas rezygnacji:', error);
    return NextResponse.json({ success: false, error: 'Wystąpił błąd serwera' }, { status: 500 });
  }
}
