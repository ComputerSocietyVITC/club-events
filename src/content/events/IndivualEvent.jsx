import { useParams } from 'react-router-dom';

const IndividualEvent = () => {
  console.log('this is working');
  const { eventId, eventName } = useParams();
  return (
    <p className="text-white">
      This is event id {eventId} and it's called {eventName}
    </p>
  );
};

export default IndividualEvent;
