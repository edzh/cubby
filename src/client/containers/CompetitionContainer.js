import { connect } from 'react-redux';

import { fetchCompetitions } from '../actions/competitionActions';

import Competition from '../components/competition/Competition';

const mapStateToProps = state => {
  return {
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

const CompetitionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Competition);

export default CompetitionContainer;
