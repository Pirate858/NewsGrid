import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/Hero';
import CardLayout from '../components/CardLayout';
import { makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { fetchTopHeadlines } from '../redux/slice';

const useStyles = makeStyles((theme) => ({
  homeContainer: {},
}));

const Homepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [heroArticle, ...articles] = useSelector((state) => state.articles);
  const loading = useSelector((state) => state.loading);
  const selectedCategory = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchTopHeadlines());
    return () => {
      console.log('Cleanup');
    };
  }, [dispatch, selectedCategory]);

  return (
    <div className={classes.homeContainer}>
      {loading ? (
        <Skeleton variant="rect" width="100%" height="55vh" animation="pulse" />
      ) : (
        <Hero article={heroArticle} loading={loading} />
      )}

      {loading ? (
        <Skeleton variant="rect" width="100%" height="55vh" animation="pulse" />
      ) : (
        <CardLayout articles={articles} selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default Homepage;
