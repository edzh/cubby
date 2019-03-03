import { connect } from 'react-redux';

import { fetchCompetition } from '../actions/competitionPageActions';

import CompetitionPage from '../components/competition/CompetitionPage';

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.competition.name,
    date: state.competition.date,
    address: state.competition.address,
    isFetching: state.competition.isFetching,
    id: ownProps.competitionId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompetition: id => {
      dispatch(fetchCompetition(id));
    }
  };
};

const CompetitionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitionPage);

export default CompetitionPageContainer;
