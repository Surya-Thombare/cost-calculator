// src/lib/openaiService.ts
// import { Configuration, OpenAIApi } from "openai";
// import { NextRequest } from "next/server";
import OpenAI from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateText(prompt: string) {

  console.log(prompt)

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        "role": "system",
        "content": "You are a IT consaltant and you work at the IT service company called draftEQ. your job is to give the costing of the project for client based on the their project requirments. I'll provide you data related to project like Industry, platform, database, users count, features, third party integrations, etc. You have to provide the cost of the project in concise way in single number in indian rupees"
      },
      { role: 'user', content: JSON.stringify({ prompt }) }
    ],
    max_tokens: 100,
  });

  return response.choices[0].message;
}