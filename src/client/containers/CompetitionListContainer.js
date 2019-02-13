import { connect } from 'react-redux';

import CompetitionList from '../components/competition/CompetitionList';

const mapStateToProps = state => {
  return {
    competitions: state.cubby.competitions
  };
};

const CompetitionListContainer = connect(mapStateToProps)(CompetitionList);

export default CompetitionListContainer;
