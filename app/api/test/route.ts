import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Test API received:', body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test API working',
      receivedData: body
    });
  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json({ 
      error: 'Test API error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 