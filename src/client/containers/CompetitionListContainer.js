import { connect } from 'react-redux';

import { fetchCompetitions } from '../actions/competitionActions';

import CompetitionList from '../components/competition/CompetitionList';

const mapStateToProps = state => {
  return {
    competitions: state.cubby.competitions,
    isFetching: state.cubby.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompetitions: () => {
      dispatch(fetchCompetitions());
    }
  };
};

const CompetitionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitionList);

export default CompetitionListContainer;
