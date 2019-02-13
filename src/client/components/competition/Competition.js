import React, { useEffect } from 'react';

import CompetitionList from '../../containers/CompetitionListContainer';
import CompetitionForm from 'client/components/competition/CompetitionForm';

export default function Competition(props) {
  props.fetchCompetitions();

  if (props.isFetching) {
    return null;
  }

  return (
    <div data-test="competition">
      <CompetitionList />
      <CompetitionForm />
    </div>
  );
}
