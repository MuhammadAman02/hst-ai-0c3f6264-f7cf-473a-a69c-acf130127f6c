import axios from 'axios';

const API_KEY = 'YOUR_NEWS_API_KEY'; // Replace with your actual API key
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const getLatestHeadlines = async (): Promise<string[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        country: 'us', // You can change this to get news from different countries
        pageSize: 5, // Number of headlines to fetch
      },
    });

    return response.data.articles.map((article: any) => article.title);
  } catch (error) {
    console.error('Error fetching news:', error);
    return ['Error fetching latest headlines'];
  }
};

export const getNewsArticles = async (query: string): Promise<any[]> => {
  try {
    const response = await axios.get(`${API_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        q: query,
        pageSize: 5,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return [];
  }
};