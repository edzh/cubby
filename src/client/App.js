import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CompetitionListContainer from './containers/CompetitionListContainer';
import CompetitionForm from './components/competition/CompetitionForm';
import CompetitionPageContainer from './containers/CompetitionPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path={'/'}
            render={() => (
              <div className="App">
                <CompetitionListContainer />
                <CompetitionForm />
              </div>
            )}
          />
          <Route
            path={'/competition/:id'}
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
