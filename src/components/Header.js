import React from 'react';
import { AppBar, Toolbar, Container, IconButton, makeStyles, Tabs, Tab, useScrollTrigger } from '@material-ui/core';
import NewsGridIcon from '../assets/logo.png';
import { FacebookWithCircle } from '@styled-icons/entypo-social';
import { Twitter } from '@styled-icons/boxicons-logos';
import { InstagramWithCircle } from '@styled-icons/entypo-social';
import { Youtube } from '@styled-icons/entypo-social';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  mainIcon: {
    '& .MuiIconButton-label ': {
      justifyContent: 'flex-start',
    },
  },
  icon: {
    width: 180,
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '6fr 2fr 3fr',
  },
  tabContainer: {
    maxWidth: '100%',
    color: theme.palette.text.primary,
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.primary.main,
      height: '100%',
    },
    '& .MuiTab-textColorInherit.Mui-selected': {
      color: theme.palette.common.white,
    },
  },
  tab: {
    fontFamily: 'Lato',
    fontWeight: 700,
    fontSize: '1rem',
    fontColor: theme.palette.text.primary,
    color: theme.palette.common.black,

    '& .MuiTab-wrapper': {
      zIndex: theme.zIndex.appBar,
    },
  },
  offset: {
    offset: theme.mixins.toolbar,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
    };
  }
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="sticky" className={classes.appBar}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.mainIcon}
                component={Link}
                to="/home"
              >
                <img src={NewsGridIcon} alt="Main Icon" className={classes.icon} />
              </IconButton>
              <div className={classes.socialMediaIconGroup}>
                <IconButton edge="start" aria-label="fb">
                  <FacebookWithCircle size="24" />
                </IconButton>
                <IconButton edge="start" aria-label="tweets">
                  <Twitter size="24" />
                </IconButton>
                <IconButton edge="start" aria-label="insta">
                  <InstagramWithCircle size="24" />
                </IconButton>
                <IconButton edge="start" aria-label="youtube">
                  <Youtube size="24" />
                </IconButton>
              </div>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                className={classes.tabContainer}
              >
                <Tab label="Home" {...a11yProps(0)} className={classes.tab} component={Link} to="/home" />
                <Tab label="About" {...a11yProps(1)} className={classes.tab} component={Link} to="/about" />
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offset} />
    </React.Fragment>
  );
};

export default Header;
