import React, { Component } from 'react';

import CompetitionForm from './components/CompetitionForm';
import CompetitionList from './components/CompetitionList';

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
