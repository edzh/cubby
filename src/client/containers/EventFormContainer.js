import { connect } from 'react-redux';
import EventForm from '../components/event/EventForm';

const mapStateToProps = state => {
  return {
    competitionId: state.competition.id
  };
};

const EventFormContainer = connect(mapStateToProps)(EventForm);

export default EventFormContainer;
