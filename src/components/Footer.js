import React from 'react';
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: '100%',
    backgroundColor: theme.palette.common.dark,
    color: '#fff',
    marginBottom: 0,
  },
  copyright: {
    width: '100%',
    textAlign: 'center',
    background: '#444',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  footerContent: {
    flex: 1,
    margin: '1.3rem',
    padding: '0.75rem',
  },
  txtEmail: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    backgroundColor: '#fff',
  },
  listText: {
    '& .MuiListItemText-primary:hover': {
      color: theme.palette.primary.main,
    },
  },
  btnFooter: {
    '& .MuiButton-label': {
      color: '#fff',
      fontFamily: 'Lato',
      fontWeight: '300',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  function ListItemLink(props) {
    return <ListItem disableGutters className={classes.listText} button component="a" {...props} />;
  }
  return (
    <footer className={classes.footerContainer}>
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Grid item container direction="row">
            <Grid item container direction="column" className={classes.footerContent}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam cupiditate, facere quod iste
                odit laborum? A nemo quasi temporibus.
              </Typography>
            </Grid>
            <Grid item container direction="column" className={classes.footerContent}>
              <Typography variant="h5">Email NewsLetter</Typography>
              <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>
              <TextField
                id="txt-email"
                label="Enter Email id"
                variant="filled"
                className={classes.txtEmail}
                fullWidth
              />
              <Button variant="contained" color="primary" className={classes.btnFooter}>
                Subscribe
              </Button>
            </Grid>
            <Grid item container direction="column" className={classes.footerContent}>
              <Typography variant="h5">Site Links</Typography>

              <List component="nav" aria-label="secondary mailbox folders" disablePadding>
                <ListItemLink href="#">
                  <ListItemText primary="Help & Support" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#">
                  <ListItemText primary="Privacy Policy" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#">
                  <ListItemText primary="About Us" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#">
                  <ListItemText primary="Contact" />
                </ListItemLink>
                <Divider />
              </List>
            </Grid>
            <Grid item container direction="column" className={classes.footerContent}>
              <Typography variant="h4">Join Our Club</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, officiis.
              </Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: '1rem' }} className={classes.btnFooter}>
                Join Now!!
              </Button>
            </Grid>
          </Grid>
          <Grid item className={classes.copyright}>
            <Typography variant="subtitle2">Copyright &copy; 2020, All Rights Reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
