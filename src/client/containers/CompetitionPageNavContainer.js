import { connect } from 'react-redux';

import { fetchCompetitions } from '../actions/competitionActions';

import CompetitionPageNav from '../components/competition/CompetitionPageNav';

const mapStateToProps = state => {
  return {
    id: state.competition.id
  };
};

const CompetitionPageNavContainer = connect(mapStateToProps)(
  CompetitionPageNav
);

export default CompetitionPageNavContainer;
