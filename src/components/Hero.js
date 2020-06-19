import React from 'react';
import { makeStyles, Grid, Container, Typography, Chip, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    width: '100%',
    height: '55vh',
    position: 'relative',
  },
  layer: {
    position: 'absolute',
    top: 0,
    laft: 0,
    backgroundColor: 'rgba(51, 51, 51, 0.4)',
    width: '100%',
    height: '100%',
  },
  heroContent: {
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1,
    height: '100%',
  },
  labelRoot: {
    marginBottom: '0.75rem',
  },
  labelSmall: {
    color: theme.palette.text.inverted,
    fontFamily: 'Lato',
  },
  btnRead: {
    marginTop: '1rem',
    '& .MuiButton-label': {
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: '700',
    },
  },
}));

const Hero = ({ article, loading }) => {
  const classes = useStyles();
  const heroArticle = article || { source: { name: 'Loading...' } };
  const {
    title,
    urlToImage,
    description,
    source: { name },
  } = heroArticle;

  return (
    <React.Fragment>
      {!loading && (
        <div
          className={classes.heroContainer}
          style={{ background: `url(${urlToImage}) no-repeat center center/cover` }}
        >
          <div className={classes.layer}>
            <Container maxWidth="lg" style={{ color: '#fff', height: '100%' }}>
              <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.heroContent}>
                <Grid item style={{ maxWidth: '50%' }}>
                  <Chip
                    color="secondary"
                    size="small"
                    label={name}
                    classes={{
                      root: classes.labelRoot,
                      labelSmall: classes.labelSmall,
                    }}
                  />

                  <Typography variant="h3">{title}</Typography>

                  <Typography variant="subtitle1" style={{ marginTop: '0.4rem' }}>
                    {description}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btnRead}
                    component={Link}
                    to={{ pathname: '/article', state: { article: heroArticle } }}
                  >
                    Read More
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Hero;
