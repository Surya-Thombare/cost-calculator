// src/pages/api
import { NextRequest, NextResponse } from 'next/server';
import { generateText } from '@/lib/openaiService';

export async function POST(req: NextRequest) {
    console.log('API request received');

    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    const { prompt } = await req.json();

    if (!prompt) {
        console.log("error here")
        return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    try {

        const text = await generateText(prompt);
        return NextResponse.json({ text }, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {

        console.log("error here two", error)
        return NextResponse.json({ error: 'Failed to generate text' }, { status: 500 });
    }
}