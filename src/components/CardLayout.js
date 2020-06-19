import React from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  makeStyles,
  Chip,
  CardActionArea,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CategoryChip from './CategoryChip';
import { getCategory } from '../redux/slice';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '3rem 0',
    display: 'grid',
    gridGap: '2rem',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  card: {
    height: '28rem',
    display: 'grid',
    gridTemplateRows: '4fr 2fr',
    textDecoration: 'none',
    '&:nth-child(even)': {
      gridTemplateRows: '2.8fr 2fr',
    },
    '&:nth-child(6n+1)': {
      backgroundColor: theme.palette.common.dark,
      color: theme.palette.common.white,
    },
    '&:nth-child(5n+1)': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },

  cardMedia: {
    height: '100%',
  },
  articleImg: {
    position: 'relative',
  },
  chip: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 700,
  },
  labelSmall: {
    color: theme.palette.text.inverted,
    fontFamily: 'Lato',
  },
  categoryContainer: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
}));

const CardLayout = ({ articles, selectedCategory }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const categoryClickHandler = (cat) => {
    dispatch(getCategory(cat));
  };

  return (
    <Box mt={4} mb={4}>
      <Container maxWidth="lg">
        <Typography variant="h4">Editors Picks</Typography>
        <div className={classes.categoryContainer}>
          {category.map((cat, idx) => {
            const capitalizedCategory = cat.charAt(0).toUpperCase() + cat.slice(1);
            return (
              <div key={idx} onClick={() => categoryClickHandler(cat)}>
                <CategoryChip category={capitalizedCategory} fill={cat === selectedCategory} />
              </div>
            );
          })}
        </div>
        <div className={classes.cardContainer}>
          {articles.map((article, idx) => {
            const cardArticle = article || { source: { name: 'Loading...' } };
            const {
              title,
              urlToImage,
              description,
              source: { name },
            } = cardArticle;
            return (
              <Card
                key={idx}
                className={classes.card}
                square
                component={Link}
                to={{ pathname: '/article', state: { article: cardArticle } }}
              >
                <div className={classes.articleImg}>
                  <CardMedia image={urlToImage} className={classes.cardMedia} component="img" />
                  <Chip
                    color="secondary"
                    size="small"
                    label={name}
                    classes={{
                      labelSmall: classes.labelSmall,
                    }}
                    className={classes.chip}
                  />
                </div>

                <CardContent>
                  <CardActionArea>
                    <Typography variant="h5">{title.substring(0, 80) + '...'}</Typography>
                    <Typography variant="body2" color="inherit" component="p">
                      {description.substring(0, 50) + '...Read More'}
                    </Typography>
                  </CardActionArea>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Box>
  );
};

export default CardLayout;
