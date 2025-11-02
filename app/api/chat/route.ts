import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
    }

    const { messages, locale = 'pl' } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const systemPrompt =
      locale === 'pl'
        ? 'Jesteś pomocnym asystentem wsparcia klienta. Odpowiadaj krótko, profesjonalnie i pomocnie. Jeśli nie znasz odpowiedzi, poleć kontakt przez email: kontakt@oliwiermarkiewicz.pl'
        : locale === 'en'
          ? 'You are a helpful customer support assistant. Respond briefly, professionally and helpfully. If you do not know the answer, recommend contacting via email: kontakt@oliwiermarkiewicz.pl'
          : 'Sie sind ein hilfreicher Kundensupport-Assistent. Antworten Sie kurz, professionell und hilfreich. Wenn Sie die Antwort nicht wissen, empfehlen Sie den Kontakt per E-Mail: kontakt@oliwiermarkiewicz.pl';

    const formattedMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...messages.map((msg: { text: string; sender: string }) => ({
        role: msg.sender === 'user' ? ('user' as const) : ('assistant' as const),
        content: msg.text,
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse =
      completion.choices[0]?.message?.content || 'Przepraszam, nie mogę teraz odpowiedzieć.';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      {
        error: 'Wystąpił błąd podczas przetwarzania wiadomości',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
