import { GoogleGenAI } from "@google/genai";
import type { Chat, GenerateContentResponse } from "@google/genai";
import { EXPERIENCES, HACKATHONS, PROJECTS, BIO } from '../constants';

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    // Note: Dans une démo sans clé, on ne veut pas crasher tout de suite, 
    // mais GoogleGenAI en a besoin. On laisse le crash se produire proprement si appelé.
    if (!apiKey) {
      console.warn("API Key is missing in process.env.API_KEY");
    }
    client = new GoogleGenAI({ apiKey: apiKey || 'dummy_key' });
  }
  return client;
};

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA personnel d'un développeur web talentueux. Ton rôle est de répondre aux questions des recruteurs ou visiteurs sur son portfolio.

Voici les données sur le développeur :

BIO: "${BIO}"

EXPÉRIENCES PROFESSIONNELLES:
${EXPERIENCES.map(e => `- ${e.role} chez ${e.company} (${e.period}): ${e.description}. Tech: ${e.technologies.join(', ')}`).join('\n')}

HACKATHONS:
${HACKATHONS.map(h => `- ${h.name} (${h.year}): Projet "${h.project}", Prix: ${h.award}. ${h.description}. Tech: ${h.tags.join(', ')}`).join('\n')}

PROJETS:
${PROJECTS.map(p => `- ${p.title}: ${p.description}. Tech: ${p.technologies.join(', ')}`).join('\n')}

RÈGLES:
1. Réponds de manière professionnelle mais sympathique.
2. Sois concis.
3. Si on te pose une question hors sujet (cuisine, politique, etc.), ramène poliment la conversation vers les compétences ou le parcours du développeur.
4. Parle à la première personne du pluriel ("Nous avons fait") ou à la troisième personne ("Il a fait") selon ce qui semble naturel, ou incarne l'assistant ("D'après son parcours...").
5. Si l'information n'est pas dans le contexte, dis honnêtement que tu ne sais pas mais que tu peux prendre un message.
`;

let chatSession: Chat | null = null;

export const startChat = () => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    startChat();
  }
  
  if (!chatSession) {
    return "Je ne suis pas disponible pour le moment (Configuration API manquante).";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Une erreur technique est survenue. Vérifiez la clé API.";
  }
};