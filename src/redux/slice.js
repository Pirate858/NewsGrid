import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  loading: false,
  hasErrors: false,
  articles: [],
  category: 'general',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticles: (state) => {
      state.loading = true;
    },
    getArticlesSuccess: (state, { payload }) => {
      state.articles = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getArticlesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    getCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

const { actions, reducer } = articlesSlice;

export const { getArticles, getArticlesSuccess, getArticlesFailure, getCategory } = actions;

export default reducer;

const fetchByCategoryApi = async (category) => {
  const response = await axios.get(
    `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b27662f179774b3281752cd031f05636`
  );
  const {
    data: { articles },
  } = response;

  return articles;
};

export function fetchTopHeadlines() {
  return async (dispatch, getState) => {
    dispatch(getArticles());
    const { category } = getState();

    try {
      const picks = await fetchByCategoryApi(category);
      dispatch(getArticlesSuccess(picks));
    } catch (error) {
      console.log(error);
      dispatch(getArticlesFailure());
    }
  };
}
