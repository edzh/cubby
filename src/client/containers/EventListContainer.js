import { connect } from 'react-redux';
import EventList from '../components/event/EventList';

const mapStateToProps = state => {
  return {
    events: props.competition.events
  };
};

const mapDispatchToProps = state => {
  return {};
};

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventListContainer;
