import { connect } from 'react-redux';

import CompetitionForm from '../components/competition/CompetitionForm';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.data
  };
};

const CompetitionFormContainer = connect(mapStateToProps)(CompetitionForm);

export default CompetitionFormContainer;
