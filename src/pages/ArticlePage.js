import React from 'react';
import {
  Grid,
  Container,
  makeStyles,
  Paper,
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core';
import { Person } from '@styled-icons/material-sharp';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: '100%',
    height: '50vh',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  miscContainer: {},
  metaData: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '3rem',
  },
  labelRoot: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    marginLeft: '0.3rem',
  },
  labelSmall: {
    color: theme.palette.text.inverted,
    fontFamily: 'Lato',
  },
  btnFooter: {
    '& .MuiButton-label': {
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: '300',
    },
  },
  joinNow: {
    backgroundColor: theme.palette.common.dark,
    color: '#fff',
    marginTop: '1rem',
  },
}));

const ArticlePage = () => {
  const classes = useStyles();
  const category = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  const location = useLocation();

  const { urlToImage, title, author, publishedAt, source, url } = location.state.article;
  const date = new Date(publishedAt);
  const DateInString = date.toString();
  console.log(date);
  const authorName = author === null ? 'Anonymous' : author;

  return (
    <Container maxWidth="lg">
      <Grid direction="row" container spacing={8}>
        <Grid item container direction="column" xs={9} p={2}>
          <Paper elevation={2} mb={2} style={{ marginBottom: '2rem' }}>
            <div style={{ margin: '2rem 2rem' }}>
              <Box
                style={{ background: `url(${urlToImage}) no-repeat center center/cover` }}
                className={classes.imgContainer}
              />
              <Typography variant="h3">{title}</Typography>
              <Box mt={2} mb={2} className={classes.metaData}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Person size={25} color="#868686" />
                  <Typography variant="subtitle2">
                    Written by {' ' + authorName + ' '} on {' ' + DateInString.substring(4, 15)}
                  </Typography>
                </div>
                <Chip
                  color="secondary"
                  size="small"
                  label={source.name}
                  classes={{
                    root: classes.labelRoot,
                    labelSmall: classes.labelSmall,
                  }}
                />
              </Box>
              <a href={url}>Read more</a>
              <Typography variant="body1" component="p">
                I'm baby fanny pack cornhole migas, woke iceland humblebrag yr listicle flannel. Poutine street art
                vegan, waistcoat af semiotics chambray bespoke put a bird on it roof party health goth. Franzen
                intelligentsia yr locavore lomo food truck tilde jianbing. Chambray iPhone vexillologist asymmetrical,
                aesthetic ennui neutra chicharrones hexagon letterpress farm-to-table mustache. Paleo taxidermy synth
                street art, food truck affogato hell of viral pour-over literally. Fashion axe keytar chartreuse
                truffaut synth, austin church-key franzen lumbersexual master cleanse biodiesel XOXO normcore. Scenester
                la croix bitters fam, crucifix portland dreamcatcher tofu meggings PBR&B retro leggings jean shorts 3
                wolf moon keffiyeh. Iceland lyft selfies everyday carry narwhal snackwave 8-bit readymade 3 wolf moon
                tattooed salvia pug. Chillwave XOXO photo booth farm-to-table mumblecore tbh polaroid street art kitsch
                church-key. Craft beer glossier fashion axe beard chambray wolf vinyl umami microdosing cray biodiesel
                vaporware chartreuse. Squid jianbing farm-to-table photo booth, chillwave waistcoat taiyaki gastropub
                pok pok salvia VHS portland bushwick. Blog listicle leggings, vice cronut heirloom subway tile tbh echo
                park iceland tousled kinfolk 3 wolf moon small batch letterpress. Fashion axe jianbing bushwick kogi
                echo park wayfarers. Meditation cred craft beer, single-origin coffee literally vape next level forage.
                Wayfarers succulents la croix, heirloom bitters deep v taiyaki. Selfies +1 listicle blog four loko. Kale
                chips shaman raw denim succulents wolf. Helvetica mlkshk lomo, poke kickstarter snackwave godard hashtag
                intelligentsia humblebrag pabst. Woke af vaporware, affogato williamsburg palo santo street art yuccie
                trust fund four dollar toast cloud bread knausgaard bespoke. Leggings XOXO selfies slow-carb art party
                YOLO hexagon wolf gluten-free glossier. 8-bit gastropub four dollar toast tote bag post-ironic.
                Mumblecore church-key normcore VHS austin street art tattooed coloring book. Asymmetrical gochujang put
                a bird on it, twee messenger bag subway tile bushwick forage trust fund. Godard poutine literally
                aesthetic wayfarers. Pinterest yuccie fixie, meh chia adaptogen small batch.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item container direction="column" xs={3} className={classes.miscContainer}>
          <Paper elevation={2} style={{ padding: '1rem', marginTop: '2rem' }}>
            <Typography variant="h4">Categories</Typography>
            <List component="nav" aria-label="main mailbox folders">
              {category.map((cat, idx) => {
                return (
                  <div key={idx}>
                    <ListItem button disableGutters>
                      <ListItemIcon>
                        <ArrowIosForwardOutline size={24} />
                      </ListItemIcon>
                      <ListItemText primary={cat} />
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </Paper>
          <Box p={2} className={classes.joinNow}>
            <Typography variant="h4"> JOIN NOW</Typography>
            <Typography variant="body2">
              Mumblecore church-key normcore VHS austin street art tattooed coloring book. Asymmetrical gochujang put a
              bird on it.
            </Typography>
            <Button variant="contained" color="secondary" style={{ marginTop: '1rem' }} className={classes.btnFooter}>
              Join Now!!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlePage;
