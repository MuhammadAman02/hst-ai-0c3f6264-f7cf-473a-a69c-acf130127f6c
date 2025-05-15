import { getNewsArticles } from './newsService';

export const getChatResponse = async (input: string): Promise<string> => {
  // This is a simple implementation. In a real-world scenario, you'd use a more sophisticated NLP system.
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('latest') || lowercaseInput.includes('news')) {
    const articles = await getNewsArticles(input);
    if (articles.length > 0) {
      const article = articles[0];
      return `Here's the latest on that topic: ${article.title}. ${article.description}`;
    } else {
      return "I'm sorry, I couldn't find any recent news on that topic.";
    }
  } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
    return "Hello! I'm your current affairs chatbot. How can I help you today?";
  } else {
    return "I'm not sure about that. Can you ask me about the latest news on a specific topic?";
  }
};