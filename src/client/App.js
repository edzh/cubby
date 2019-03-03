import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';

import Navbar from './containers/NavbarContainer';

import CompetitionListContainer from './containers/CompetitionListContainer';
import CompetitionFormContainer from './containers/CompetitionFormContainer';
import CompetitionPageContainer from './containers/CompetitionPageContainer';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path={'/'} render={() => <Landing />} />
          <Route
            exact
            path={'/competition'}
            render={() => (
              <div className="App">
                <CompetitionListContainer />
              </div>
            )}
          />
          <Route
            exact
            path={'/competition/create'}
            render={() => (
              <div className="App">
                <CompetitionFormContainer />
              </div>
            )}
          />
          <Route
            path={'/competition/id/:id'}
            render={({ match }) => (
              <CompetitionPageContainer competitionId={match.params.id} />
            )}
          />
          <Route exact path={'/signin'} render={() => <SignInContainer />} />
          <Route exact path={'/signup'} render={() => <SignUpContainer />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
