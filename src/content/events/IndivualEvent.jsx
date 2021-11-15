import { useParams } from 'react-router-dom';

const IndividualEvent = () => {
  console.log('this is working');
  const { eventId } = useParams();
  return <p>This is event id : {eventId}</p>;
};

export default IndividualEvent;
