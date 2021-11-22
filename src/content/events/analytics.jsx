import { AiOutlineArrowLeft } from 'react-icons/ai';
const UserCard = ({ username, photo }) => {
  const roundstyle = {
    height: 50,
    width: 50,
    borderRadius: 28,
  };
  //
  return (
    <section className="py-2 h-16 pl-4 mb-4 my-4 rounded-large  text-4xl align-center text-white font-bold bg-innerboxgreen">
      {username}
    </section>
  );
};

const EventAnalytics = () => {
  return (
    <section className="grid grid-cols-12">
      <section className="col-start-1 col">
        <section className="pl-12 py-8 text-4xl text-white">
          <AiOutlineArrowLeft />
        </section>
      </section>
      <section className="col-start-2 col-span-10">
        <section className="grid grid-row-3 gap-2">
          <section className="py-4 font-monty font-bold text-4xl text-white">
            Event Analytics
          </section>
          <section className="font-monty font-bold  text-white">
            <section className="text-3xl">Hosted By</section>
            <section className="mb-10 px-4 py-1 w-max text-2.5xl rounded-full bg-boxgreen">
              [CLUB LOREM IPSUM DOLOR SIT AMET]
            </section>
          </section>
          <section className="text-white text-3xl font-monty font-bold">Registered Users</section>
          <section className="px-4 text-white rounded-large bg-boxgreen">
            <UserCard username={'Abhijith'} />
            <UserCard username={'Abhijith'} />
            <UserCard username={'Abhijith'} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default EventAnalytics;
