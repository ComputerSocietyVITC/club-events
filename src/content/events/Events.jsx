import { Link } from 'react-router-dom';
import ScrollToTop from '../../common/ScrollToTop';

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

const EventCardTitle = ({ name, club }) => (
  <div className="z-10 justify-end col-start-3 text-white">
    <strong className="block text-right text-2xl">{name}</strong>
    <strong className="block text-right font-normal">Held by {club}</strong>
  </div>
);

const EventCardInfoItem = ({ svgURL, text }) => (
  <div className="flex">
    <img className="filter invert h-5 w-auto mr-2 mt-1" src={svgURL} />
    <div>{text}</div>
  </div>
);

const EventCardInfo = ({ tags, availability, when }) => (
  <div className="z-10 flex flex-col row-start-2 col-start-2 text-white ml-6">
    <EventCardInfoItem
      svgURL="https://unpkg.com/ionicons@5.5.2/dist/svg/pricetags-outline.svg"
      text={tags.map(tag => (tag[0] !== '#' ? '#' : '') + tag).join(' ')}
    />
    <EventCardInfoItem
      svgURL="https://unpkg.com/ionicons@5.5.2/dist/svg/person-outline.svg"
      text={`Registered ${availability.filled}/${availability.total}`}
    />
    <EventCardInfoItem
      svgURL="https://unpkg.com/ionicons@5.5.2/dist/svg/time.svg"
      text={`Time: ${when}`}
    />
  </div>
);

const EventCardGoTo = ({ id, name }) => {
  const urlified_name = name.replace(/ /g, '-').toLowerCase();
  return (
    <div className="z-10 flex justify-end col-start-3 row-start-2">
      <Link
        to={`/events/${id}/${urlified_name}`}
        className="rounded-full flex self-end items-center py-1 px-3.5 bg-white"
      >
        <img
          className="h-5 w-auto ml-1"
          width="64"
          height="64"
          src="https://unpkg.com/ionicons@5.5.2/dist/svg/chevron-forward-outline.svg"
        ></img>
      </Link>
    </div>
  );
};

const EventCard = ({ details, idx }) => (
  <div className="flex flex-row flex-wrap items-center justify-center col-start-1">
    <div className="bg-darkergreen m-5 px-8 sm:px-2 py-2 rounded-xl grid grid-cols-3 grid-rows-2 relative overflow-hidden">
      <div className="z-0 rounded-2xl w-96 h-96 bg-lightergreen transform rotate-45 absolute -left-48 -top-16 sm:rotate-neg60 sm:left-ecmleft sm:top-ecmtop"></div>
      <EventCardTitle {...details} />
      <EventCardInfo {...details} />
      <EventCardGoTo id={idx} name={details.name} />
    </div>
  </div>
);

const Events = () => (
  <>
    <ScrollToTop
      child={data.map((details, idx) => (
        <EventCard details={details} idx={idx} key={idx} />
      ))}
      dimInRem={2.75}
    />
  </>
);

export default Events;
