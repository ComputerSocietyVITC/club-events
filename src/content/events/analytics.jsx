import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const InnerBox = ({ Name }) => {
  return (
    <>
      <section className="my-2 mx-4 py-4 px-4 bg-innerboxgreen text-white font-monty rounded-large">
        <section className="grid grid-cols-8">
          <section className="col-start-1">
            <img
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
              }}
              src="https://png.pngitem.com/pimgs/s/105-1050694_user-placeholder-image-png-transparent-png.png"
            />
          </section>
          <section className="center col-start-2 col-span-3">{Name}</section>
        </section>
      </section>
    </>
  );
};

const EventAnalytics = () => {
  const Iconstyles = {
    height: '50px',
    width: '50px',
  };
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <section className=" py-2 grid grid-cols-8 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4">
        <section className="pl-10 text-white text-3xl col-start-1 col-span-1">
          <BiArrowBack />
        </section>
        <section className="col-start-2 col-span-6 gap-2">
          <section className="py-2 text-white font-monty font-bold text-3xl">
            Event Analytics
          </section>
          <section className="py-2 text-white font-monty font-bold text-2xl">
            Time-Left : [TIME]
          </section>
          <section className="py-2 text-white font-monty font-bold text-2xl">
            Hosted By
            <section className="mt-2 px-3 rounded-large bg-boxgreen w-full">
              IEEE Computer Society
            </section>
            <section className="py-3 text-white font-monty font-bold">Registered Users</section>
            <section className="py-4 bg-boxgreen rounded-large px-2 h-full">
              <InnerBox Name="Participant 1" />
              <InnerBox Name="Participant 2" />
              <InnerBox Name="Participant 3" />
              <InnerBox Name="Participant 4" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default EventAnalytics;
