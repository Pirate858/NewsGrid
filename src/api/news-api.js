import axios from 'axios';

const url = (newstype) => `http://newsapi.org/v2/${newstype}?country=in&apiKey=b27662f179774b3281752cd031f05636`;

export const fetchData = async (newstype) => {
  try {
    const response = await axios.get(url(newstype));
    const {
      data: { articles },
    } = response;

    return articles;
  } catch (error) {
    return error;
  }
};
