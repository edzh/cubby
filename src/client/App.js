import React, { Component } from 'react';

import CompetitionForm from './components/competition/CompetitionForm';
import CompetitionList from './components/competition/CompetitionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompetitionForm />
        <CompetitionList />
      </div>
    );
  }
}

export default App;
