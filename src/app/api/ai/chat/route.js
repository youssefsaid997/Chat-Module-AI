import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages, generateText, tool } from "ai";
import { z } from "zod";
import { calculator, SerperClient, WeatherClient } from "@agentic/stdlib";
import { createAISDKTools } from "@agentic/ai-sdk";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// useChat({ api : "/api/ai/chat"})
export async function POST(req) {
  const { messages, liveSearch, fileText, params } = await req.json();

  const weather = new WeatherClient({
    apiKey: process.env.WEATHER_API_KEY,
  });
  const serper = new SerperClient();

  // _def
  //
  const weatherTool = createAISDKTools(weather);
  console.log(weatherTool);
  // const search = new SearchAndCrawl()
  // ai sdk instead of langchain
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: "You are a helpful assistant.",
    messages: convertToCoreMessages(messages),
    tools: {
      weather: {
        description: "get the weather of specific location",
        parameters: z.object({
          city: z.string(),
        }),
        execute: async ({ city }) => {
          return weather.getCurrentWeather(city);
        },
      },
      search: {
        description: "search in google based on query sent to you",
        parameters: z.object({
          query: z.string(),
        }),
        execute: async ({ query }) => {
          return serper.search(query);
        },
      },
    },
    toolChoice: params?.includes("search") ? "auto" : "none",
    maxToolRoundtrips: 3,
  });

  return result.toDataStreamResponse();
}
