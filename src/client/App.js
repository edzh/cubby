import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/Landing';

import Navbar from './components/navbar/Navbar';

import CompetitionListContainer from './containers/CompetitionListContainer';
import CompetitionForm from './components/competition/CompetitionForm';
import CompetitionPageContainer from './containers/CompetitionPageContainer';

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
                <CompetitionForm />
              </div>
            )}
          />
          <Route
            exact
            path={'/competition/id/:id'}
            render={({ match }) => (
              <CompetitionPageContainer competitionId={match.params.id} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
