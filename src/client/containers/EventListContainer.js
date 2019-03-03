import { connect } from 'react-redux';
import EventList from '../components/event/EventList';
import { fetchEvents } from '../actions/eventActions';

const mapStateToProps = state => {
  return {
    events: state.competition.events,
    competitionId: state.competition.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: id => {
      dispatch(fetchEvents(id));
    }
  };
};

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventListContainer;
