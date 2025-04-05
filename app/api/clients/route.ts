import { NextRequest, NextResponse } from 'next/server';
import { saveClient } from '@/lib/api/client/client.service';
import { ClientData } from '@/lib/api/client/client.types';

export async function POST(request: NextRequest) {
  try {
    const data: ClientData = await request.json();
    
    const result = await saveClient(data);
    
    if (!result.success) {
      const statusCode = 
        result.error?.includes('required') || 
        result.error?.includes('valid') ? 400 : 500;
        
      return NextResponse.json(
        { success: false, error: result.error }, 
        { status: statusCode }
      );
    }
    
    return NextResponse.json({
      success: true,
      client: result.client
    });
  } catch (error) {
    console.error('API Error in clients endpoint:', error);
    
      return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unexpected error processing request' 
      }, 
      { status: 500 }
    );
  }
} 