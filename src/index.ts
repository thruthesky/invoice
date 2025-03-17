import { gemini20Flash, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { apiKey } from "./key";

const ai = genkit({
  // Google AI plugin which allows us to use Gemini AI Models.
  plugins: [googleAI({ apiKey: apiKey })],
  // Gemini 2.0 Flash is the default model.
  model: gemini20Flash,
});

(async () => {
  const { text } = await ai.generate("What is the capital of Philippines?");
  console.log(text);
})();
