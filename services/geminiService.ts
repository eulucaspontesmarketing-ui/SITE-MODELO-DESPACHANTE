import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `Você é a Luiza, assistente virtual interna do site de um despachante documentalista. 
Você NÃO é um chatbot genérico, NÃO cria textos longos e NÃO faz explicações detalhadas. 
Suas respostas devem ser MUITO CURTAS, SIMPLES e RÁPIDAS, como uma conversa real de WhatsApp. 

REGRAS OBRIGATÓRIAS:
- Use NO MÁXIMO 2 frases curtas por resposta.
- NÃO use parágrafos ou textos grandes.
- NÃO use termos técnicos.
- Se perguntarem como funciona algo (ex: emplacamento), responda de forma ultra-resumida. Ex: "Você envia os documentos e a gente cuida do processo. Avisamos quando estiver pronto."
- Se perguntarem valores ou prazos específicos, diga que consegue passar certinho no WhatsApp e convide para o contato humano.
- Informe apenas o essencial quando necessário: atendimento online via WhatsApp, presencial no Centro de Manaus e domicílio com agendamento.
- Nunca invente preços ou taxas.
- Seu único objetivo é responder rápido, tirar uma dúvida simples e direcionar para o botão do WhatsApp.`;

export const getGeminiResponse = async (history: Message[], userInput: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message: userInput });
    return response.text || "Pode me chamar no WhatsApp? Lá te respondo agora!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um probleminha aqui. Pode clicar no botão do WhatsApp para falar comigo?";
  }
};