const mockEventData = {
  name: 'Event Name 1',
  club: 'Club 1',
  tags: ['#hackathon', '#mock', 'haha'],
  when: '04:30pm',
  availability: {
    filled: 12,
    total: 60,
  },
};

const EventCard = (details) => <p>{JSON.stringify(mockEventData)}</p>;

const Events = () => new Array(5).fill(mockEventData).map((data) => <EventCard details={data} />);

export default Events;
