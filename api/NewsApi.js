import axios from "axios";

export const getNews = async (country) => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    try {
        console.log("Key :  ", apiKey)
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        })
        console.log(result.data.articles)
        return result.data
    } catch (error) {
        console.log(error)
    }
}