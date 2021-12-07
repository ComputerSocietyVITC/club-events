import CenteredContent from '../../common/CenteredContent';

const Logo = ({ logoURL }) => (
  <div className="flex justify-center items-center row-start-1 col-start-1 lg:row-span-2">
    <img src={logoURL} />
  </div>
);

const Title = ({ title }) => (
  <div className="text-5xl row-start-1 col-start-2 flex flex-col justify-center ">
    <strong>{title}</strong>
  </div>
);

const SubTitle = ({ subTitle }) => (
  <div className="font-bold text-2xl row-start-2 col-start-2 md:mt-6">{subTitle}</div>
);

const Location = ({ location }) => (
  <div className="row-start-3 col-start-2 xl:col-start-1 col-end-3 w-max flex justify-center items-center bg-cyan rounded-full text-black font-bold p-2 my-3">
    Location: {location}
  </div>
);

const RegistrationDeadline = ({ registrationDeadline }) => (
  <div className="row-start-4 col-start-2 xl:col-start-1 col-end-3 flex w-max justify-center items-center bg-cyan rounded-full text-black font-bold p-2 my-3">
    Registration Deadline: {registrationDeadline}
  </div>
);

const TeamSize = ({ teamSize }) => (
  <div className="row-start-5 col-start-2 xl:col-start-1 w-max bg-cyan rounded-full flex justify-center items-center p-2 text-black font-bold my-3">
    Team Size: {teamSize}
  </div>
);

const EventDetailsLeftPart = ({
  logoURL,
  title,
  subTitle,
  location,
  registrationDeadline,
  teamSize,
}) => (
  <div className="grid gap-x-4 grid-cols-[12ch,4fr] grid-rows-[2.6fr,1fr,1fr,1fr,1fr] text-white">
    <Logo {...{ logoURL }} />
    <Title {...{ title }} />
    <SubTitle {...{ subTitle }} />
    <Location {...{ location }} />
    <RegistrationDeadline {...{ registrationDeadline }} />
    <TeamSize {...{ teamSize }} />
  </div>
);

const RegisterButton = () => (
  <button className="bg-brightkindagreen font-bold row-start-1 col-start-1 rounded-full text-4xl">
    REGISTER NOW
  </button>
);

const CalendarThingy = () => (
  <div className="rounded-full bg-whitekindacolor row-start-1 col-start-2 p-2 flex justify-center items-center">
    <img
      src="https://unpkg.com/ionicons@5.5.2/dist/svg/calendar-clear-outline.svg"
      width="64"
      height="64"
    />
  </div>
);

const DateAndTime = ({ dateAndTime }) => (
  <div className="row-start-2 col-span-2 flex justify-center items-center bg-cyan rounded-full text-black font-bold p-2 my-3">
    {dateAndTime}
  </div>
);

const DaysLeft = ({ daysLeft }) => (
  <div className="flex flex-col justify-center">
    <img src="https://unpkg.com/ionicons@5.5.2/dist/svg/time-outline.svg" height="64" width="64" />
    <div className="text-xl text-center">{daysLeft}</div>
    <div className="text-sm">Days Left</div>
  </div>
);

const Registered = ({ registeredSoFar }) => (
  <div className="flex flex-col justify-center">
    <img
      src="https://unpkg.com/ionicons@5.5.2/dist/svg/person-outline.svg"
      height="64"
      width="64"
    />
    <div className="text-xl text-center">{registeredSoFar}</div>
    <div className="text-sm">Registered</div>
  </div>
);

const DaysLeftAndRegistered = ({ daysLeft, registeredSoFar }) => (
  <div className="flex rounded-3xl bg-whitekindacolor justify-around col-start-1 col-end-3 font-semibold">
    <div className="flex justify-center justify-self-start">
      <DaysLeft daysLeft={daysLeft} />
    </div>
    <div className="border-solid border-black border-r border-l my-4 row-start-3 col-span-2" />
    <div className="flex justify-center justify-self-end">
      <Registered registeredSoFar={registeredSoFar} />
    </div>
  </div>
);

const EventDetailsRightPart = ({ dateAndTime, daysLeft, registeredSoFar }) => (
  <div className="grid gap-3 grid-rows-[1fr,1fr,2fr] grid-cols-[5fr,1fr] p-1 mt-2">
    <RegisterButton />
    <CalendarThingy />
    <DateAndTime {...{ dateAndTime }} />
    <DaysLeftAndRegistered {...{ daysLeft, registeredSoFar }} />
  </div>
);

const EventDetails = ({
  logoURL,
  title,
  subTitle,
  location,
  registrationDeadline,
  teamSize,
  dateAndTime,
  daysLeft,
  registeredSoFar,
}) => (
  <div className="flex flex-row xl:flex-col lg:gap-8 gap-5 justify-between">
    <EventDetailsLeftPart
      {...{ logoURL, title, subTitle, location, registrationDeadline, teamSize }}
    />
    <EventDetailsRightPart {...{ dateAndTime, daysLeft, registeredSoFar }} />
  </div>
);

const AboutEvent = () => (
  <div className="font-bold p-4 bg-darkergreen font-monty text-white rounded-large mt-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec erat ut mi pretium condimentum
    sed id sapien. Sed id laoreet felis, vel pretium mauris. Vestibulum orci dolor, commodo eu sem
    at, scelerisque tincidunt nisl. Ut tincidunt eros et tortor fringilla, eu facilisis leo
    tincidunt. Sed risus tellus, pharetra sit amet iaculis vitae, vulputate sed erat. Pellentesque
    quam magna, finibus eget tristique a, porta a leo. Donec augue augue, euismod eget magna sit
    amet, euismod ornare sapien. Ut vitae massa faucibus, lobortis nisl quis, molestie velit. Sed
    faucibus, ipsum et ornare tristique, nibh leo interdum elit, ac fermentum velit ipsum vel orci.
    Cras non arcu fermentum, molestie libero vel, pellentesque erat. Duis efficitur volutpat neque
    nec cursus. Duis sit amet lorem sit amet orci condimentum elementum sed rutrum quam. Interdum et
    malesuada fames ac ante ipsum primis in faucibus. Proin eu urna a erat ultrices maximus. Donec
    ut mi pulvinar, varius sem nec, commodo neque. Donec non congue diam. Integer et ligula
    vestibulum, fermentum metus vehicula, ultricies metus. Cras a ante finibus arcu interdum
    malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra eu orci
    maximus pretium. Vestibulum cursus ultricies velit ut scelerisque. Suspendisse potenti. Quisque
    imperdiet ornare magna, vitae luctus metus rhoncus nec. Maecenas eleifend egestas iaculis. Donec
    molestie lorem id ex aliquam, vel cursus odio viverra. Suspendisse sodales facilisis sapien ac
    vestibulum. Suspendisse id velit scelerisque, tincidunt ex eu, interdum metus. Integer dictum
    elit nec cursus posuere. Pellentesque quis magna rutrum, tristique leo eget, pretium nunc. Nunc
    at feugiat lorem. Vivamus vitae neque mattis, fermentum tellus et, ullamcorper mi. Curabitur a
    tincidunt felis. Pellentesque at metus quis lacus tempor ultricies eget sit amet neque. Etiam
    sodales leo velit, at commodo mauris facilisis at. Nullam porta sem sit amet sodales
    scelerisque. Nunc non massa sem. Cras eu augue non nisl molestie bibendum. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Nulla aliquam faucibus nisl vitae sollicitudin.
    Phasellus convallis quis lectus sit amet auctor. Suspendisse pretium justo sed felis posuere
    volutpat. Maecenas et metus cursus, molestie sapien vel, malesuada urna. Phasellus velit arcu,
    tristique
  </div>
);

const ContactBox = () => (
  <div className="px-6 md:px-2 py-1 bg-darkergreen font-monty text-white rounded-large mt-5 flex items-center">
    <div className="grid grid-flow-row-dense gap-2">
      <div className="col-start-1 row-span-2 flex flex-col items-center justify-center">
        <a href="http://drive.google.com" target="_blank" rel="noopener noreferrer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.1666 13.5H22.4999V0.5H9.49992V13.5H0.833252L15.9999 28.6667L31.1666 13.5ZM0.833252 33V37.3333H31.1666V33H0.833252Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="font-bold row-start-1 col-start-2">Download Attachments</div>
      <div className="row-start-2 col-start-2">instructions.pdf +1 more</div>
    </div>
    <div className="ml-auto mr-0 grid grid-flow-row-dense gap-2">
      <div className="col-start-1 row-span-2 flex flex-col items-center justify-center">
        <a href="tel:+916789012345">
          <img
            src="https://unpkg.com/ionicons@5.5.2/dist/svg/call-outline.svg"
            height="64"
            width="64"
            className="filter invert"
          />
        </a>
      </div>
      <div className="font-bold row-start-1 col-start-2">Samank Gupta, Co-ordinator</div>
      <div className="row-start-2 col-start-2">+91 67890 12345</div>
    </div>
  </div>
);

const AboutClub = () => {
  return (
    <div className="bg-cyan rounded-large p-4 mt-6">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Held by</h2>
        <svg
          className="block mx-auto my-2"
          width="432"
          height="7"
          viewBox="0 0 432 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3.49805" y1="4.25" x2="426.753" y2="4.25" stroke="#222222" stroke-width="2" />
          <ellipse cx="3.49798" cy="3.5" rx="3.49798" ry="3.5" fill="#222222" />
          <ellipse cx="428.502" cy="3.5" rx="3.49799" ry="3.5" fill="#222222" />
        </svg>

        <h3 className="text-2xl font-bold">Club</h3>
      </div>
      <div className="font-bold mt-4">
        Ut vitae massa faucibus, lobortis nisl quis, molestie velit. Sed faucibus, ipsum et ornare
        tristique, nibh leo interdum elit, ac fermentum velit ipsum vel orci. Cras non arcu
        fermentum, molestie libero vel, pellentesque erat. Duis efficitur volutpat neque nec cursus.
        Duis sit amet lorem sit amet orci condimentum elementum sed rutrum quam. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin eu urna a erat ultrices maximus.
        Donec ut mi pulvinar, varius sem nec, commodo neque. Donec non congue diam. Integer et
        ligula vestibulum, fermentum metus vehicula, ultricies metus. Cras a ante finibus arcu
        interdum malesuada.
      </div>
    </div>
  );
};

const VoiceYourOpinion = () => (
  <div className="font-semibold text-white text-2xl mt-6 p-2">Voice Your Opinion!</div>
);

const CommentBox = () => (
  <textarea
    className="bg-cyan rounded-large p-4 mt-6 w-full font-semibold"
    placeholder="Write something..."
  ></textarea>
);

const mockData = {
  logoURL: 'https://avatars.githubusercontent.com/u/55147815?s=200&v=4',
  title: 'Get your start-up rolling: Make your pitch',
  subTitle: 'Project Venture Seed',
  location: 'Microsoft Teams',
  registrationDeadline: "28 Nov' 21 11:59 PM",
  teamSize: '1-3 Members',
  dateAndTime: "03 Dec'21 12:00 PM - 04 Dec'21 01:00 PM",
  daysLeft: 17,
  registeredSoFar: 57,
};

const IndividualEvent = () => {
  return (
    <div className="mx-auto my-4 max-w-3/4 xl:max-w-9/10">
      <EventDetails {...mockData} />
      <AboutEvent />
      <ContactBox />
      <AboutClub />
      <VoiceYourOpinion />
      <CommentBox />
    </div>
  );
};

export default IndividualEvent;
