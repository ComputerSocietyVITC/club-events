import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsFillPlusCircleFill, BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { CgAttachment } from 'react-icons/cg';

const CreateEvent = () => {
  const Iconstyles = {
    height: '50px',
    width: '50px',
  };
  const [toggle, setToggle] = useState(true);
  return (
    <section className="grid xl:grid-cols-12 lg:grid-cols-12 sm:grid-cols-6">
      <section className="pl-10 pr-2 py-3 col-start-1 pt-8 cursor-pointer">
        <BiArrowBack className="text-white text-5xl" />
      </section>
      <section className="py-2 sm:col-start-2 sm:col-span-4 lg:col-start-2 lg:col-span-8 xl:col-start-2 xl:col-span-8">
        <section className="text-white text-4xl font-monty font-extrabold pt-6">Create Event</section>
        <br/>
        <section className="py-4 text-white text-base font-monty font-semibold pt-2">Event Name</section>
        <section>
          <input className="bg-boxgreen w-full rounded-large" type="text" />
        </section>
        <br/>
        <section className="flex flex-row py-3 text-white text-base font-monty font-semibold space-x-8">
          <section className=" px-2">
            Event Timings <input className="bg-boxgreen w-full rounded-large" type="time" />
          </section>
          <section className=" px-2">
           Registration Deadline
            <input className="bg-boxgreen w-full rounded-large" type="date" />
          </section>
        </section>
        <br/>
        <section>
          <section className="flex flex-row py-3 text-white text-base font-monty font-semibold space-x-8">
            <section className=" px-2">
              Categories <input className="bg-boxgreen w-full rounded-large" type="text" />
            </section>
            <section className=" px-2">
              Team size
              <input className="bg-boxgreen w-full rounded-large" type="text" />
            </section>
          </section>
          <br/>
          <section>
            <section className="font-monty h-full text-white text-base font-semibold">
              Event Info
            </section>
            <br/>
            <section className="bg-boxgreen  rounded-large">
              <section className="text-white font-monty text-lg px-0">
                <textarea
                  name="Event Info"
                  cols="100"
                  rows="10"
                  className="pl-3 bg-boxgreen w-full rounded-large max-h-full h-64"
                ></textarea>
              </section>
            </section>
          </section>
          <br />
          <section className="text-white text-base font-monty font-semibold">
            Do you want users to register to this event from our portal?
            <section className="transition duration-1000 cursor-pointer">
              {(() => {
                if (toggle) {
                  return (
                    <>
                      <BsToggle2Off
                        style={Iconstyles}
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      />
                    </>
                  );
                } else {
                  return (
                    <>
                      <BsToggle2On
                        style={Iconstyles}
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      />
                    </>
                  );
                }
              })()}
            </section>
          </section>
          <section className="flex flex-box py-3 pt-5 justify-start space-x-8 text-base">
            <section className="text-white px-2 font-monty font-semibold ">
              Co-ordinator Name <input className="bg-boxgreen w-full rounded-large" type="text" />
            </section>
            <section className="text-white pr-2 font-monty font-semibold ">
              Contact Name
              <input className="bg-boxgreen w-full rounded-large" type="text" />
            </section>
          </section>
          <br/>
          <section className="text-white font-monty text-base">Add Attachments</section>
        </section>
      </section>
      <section className="col-start-2 col-span-3 text-white px-1 py-2 text-3xl">
        <section className="hover:transform-gpu hover: transition translate-x-1 flex flex-box justify-start gap-6 cursor-pointer">
          <section>
            <BsFillPlusCircleFill />
          </section>
          <section className="bg-boxgreen px-2 text-white font-monty text-xl rounded-large ">
            <section className="flex flex-box justify-evenly">
              <CgAttachment style={{ paddingTop: '8px', color: 'white' }} />
              Add Attachments
            </section>
          </section>
        </section>
      </section>
      <br/>
    </section>
  );
};

export default CreateEvent;
