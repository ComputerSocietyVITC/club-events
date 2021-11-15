import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Event Name 1',
    club: 'Club 1',
    tags: ['#hackathon', '#mock', 'haha'],
    when: '04:30pm',
    availability: {
      filled: 12,
      total: 60,
    },
  },
  {
    name: 'Event Name 2',
    club: 'Club 2',
    tags: ['#hackathon', '#mock', 'haha'],
    when: '04:30pm',
    availability: {
      filled: 12,
      total: 60,
    },
  },
  {
    name: 'Event Name 3',
    club: 'Club 1',
    tags: ['#hackathon', '#mock', 'haha'],
    when: '04:30pm',
    availability: {
      filled: 12,
      total: 60,
    },
  },
];

const EventCard = ({ details, idx }) => {
  return (
    <>
      <Link to={`/events/${idx}`}>
        <p className="m-5">{JSON.stringify(details)}</p>
      </Link>
    </>
  );
};

const Events = () => data.map((data, idx) => <EventCard details={data} idx={idx} key={idx} />);

export default Events;
