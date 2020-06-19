import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './configs/Theme';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/article">
            <ArticlePage />
          </Route>
          <Route exact path="/about" component={() => <div>About</div>} />
          <Redirect from="/" to="/home" exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
