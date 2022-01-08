const IndividualEvent = () => (
  <div className="flex-col px-3 mmd:px-10 py-7">
    <div className="mlg:grid mlg:grid-cols-[1fr,2fr,2fr]">
      <img
        src={'https://avatars.githubusercontent.com/u/55147815?s=200&v=4'}
        className="lg:mx-auto col-start-1"
      />
      <div className="mlg:col-start-2">
        <strong className="text-4xl text-white my-7">
          <p className="md:text-center">Get your start-up rolling: Make your pitch</p>
        </strong>
        <div className="font-bold text-2xl text-white my-7">Project Venture Seed</div>
        <div className="bg-cyan rounded-full text-black font-bold w-max flex my-5 pl-1 pr-2 py-2">
          <svg viewBox="0 0 6 8" className="h-6 w-6">
            <path
              d="M3.00008 0.666687C1.71008 0.666687 0.666748 1.71002 0.666748 3.00002C0.666748 4.75002 3.00008 7.33335 3.00008 7.33335C3.00008 7.33335 5.33342 4.75002 5.33342 3.00002C5.33342 1.71002 4.29008 0.666687 3.00008 0.666687ZM3.00008 3.83335C2.54008 3.83335 2.16675 3.46002 2.16675 3.00002C2.16675 2.54002 2.54008 2.16669 3.00008 2.16669C3.46008 2.16669 3.83341 2.54002 3.83341 3.00002C3.83341 3.46002 3.46008 3.83335 3.00008 3.83335Z"
              fill="#222222"
            />
          </svg>
          <p>Microsoft Teams</p>
        </div>
        <div className="bg-cyan rounded-full text-black font-bold w-max flex my-5 pl-1 pr-2 py-2">
          <svg viewBox="0 0 6 6" className="h-6 w-6">
            <path
              d="M2.66667 4.66667C2.66667 4.85 2.81667 5 3 5C3.18333 5 3.33333 4.85 3.33333 4.66667C3.33333 4.48333 3.18333 4.33333 3 4.33333C2.81667 4.33333 2.66667 4.48333 2.66667 4.66667ZM2.66667 0V1.33333H3.33333V0.693333C4.46333 0.856667 5.33333 1.82333 5.33333 3C5.33333 4.29 4.29 5.33333 3 5.33333C1.71 5.33333 0.666667 4.29 0.666667 3C0.666667 2.44 0.863333 1.92667 1.19333 1.52667L3 3.33333L3.47 2.86333L1.20333 0.596667V0.603333C0.473333 1.15 0 2.01667 0 3C0 4.65667 1.34 6 3 6C4.65667 6 6 4.65667 6 3C6 1.34333 4.65667 0 3 0H2.66667ZM5 3C5 2.81667 4.85 2.66667 4.66667 2.66667C4.48333 2.66667 4.33333 2.81667 4.33333 3C4.33333 3.18333 4.48333 3.33333 4.66667 3.33333C4.85 3.33333 5 3.18333 5 3ZM1 3C1 3.18333 1.15 3.33333 1.33333 3.33333C1.51667 3.33333 1.66667 3.18333 1.66667 3C1.66667 2.81667 1.51667 2.66667 1.33333 2.66667C1.15 2.66667 1 2.81667 1 3Z"
              fill="#222222"
            />
          </svg>
          <p className="pl-1">Registration Deadline: 28 Nov' 21 11:59 PM</p>
        </div>
      </div>
      <div className="grid mlg:col-start-3 gap-3 grid-rows-[1fr,1fr,2fr] grid-cols-[5fr,1fr] p-1 mt-2">
        <button className="bg-brightkindagreen rounded-3xl">
          <p className="font-bold text-3xl">REGISTER NOW</p>
        </button>
        <div className="rounded-full bg-whitekindacolor row-start-1 col-start-2 p-2 flex justify-center items-center">
          <img
            src="https://unpkg.com/ionicons@5.5.2/dist/svg/calendar-clear-outline.svg"
            width="64"
            height="64"
          />
        </div>
        <div className="row-start-2 col-span-2 bg-cyan rounded-full text-black font-bold flex my-3 pl-1 pr-2 py-2 justify-center">
          <svg viewBox="0 0 9 9" fill="none" className="h-6 w-6">
            <circle cx="4.5" cy="4.5" r="4.25" stroke="#222222" stroke-width="0.5" />
            <rect x="3.8999" y="1.30005" width="0.8" height="4" fill="#222222" />
            <rect
              x="3.8999"
              y="5.29999"
              width="0.8"
              height="2.4"
              transform="rotate(-60 3.8999 5.29999)"
              fill="#222222"
            />
          </svg>
          <p className="pl-1">03 Dec'21 12:00 PM - 04 Dec'21 01:00 PM</p>
        </div>
        <div className="flex rounded-3xl bg-whitekindacolor justify-around col-start-1 col-end-3 font-semibold">
          <div className="flex justify-center justify-self-start">
            <div className="flex flex-col justify-center">
              <img
                src="https://unpkg.com/ionicons@5.5.2/dist/svg/time-outline.svg"
                height="64"
                width="64"
              />
              <div className="text-xl text-center">17</div>
              <div className="text-sm">Days Left</div>
            </div>
          </div>
          <div className="border-solid border-black border-r border-l my-4 row-start-3 col-span-2" />
          <div className="flex justify-center justify-self-end">
            <div className="flex flex-col justify-center">
              <img
                src="https://unpkg.com/ionicons@5.5.2/dist/svg/person-outline.svg"
                height="64"
                width="64"
              />
              <div className="text-xl text-center">57</div>
              <div className="text-sm">Registered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="font-bold p-4 bg-darkergreen font-monty text-white rounded-large mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec erat ut mi pretium
      condimentum sed id sapien. Sed id laoreet felis, vel pretium mauris. Vestibulum orci dolor,
      commodo eu sem at, scelerisque tincidunt nisl. Ut tincidunt eros et tortor fringilla, eu
      facilisis leo tincidunt. Sed risus tellus, pharetra sit amet iaculis vitae, vulputate sed
      erat. Pellentesque quam magna, finibus eget tristique a, porta a leo. Donec augue augue,
      euismod eget magna sit amet, euismod ornare sapien. Ut vitae massa faucibus, lobortis nisl
      quis, molestie velit. Sed faucibus, ipsum et ornare tristique, nibh leo interdum elit, ac
      fermentum velit ipsum vel orci. Cras non arcu fermentum, molestie libero vel, pellentesque
      erat. Duis efficitur volutpat neque nec cursus. Duis sit amet lorem sit amet orci condimentum
      elementum sed rutrum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin
      eu urna a erat ultrices maximus. Donec ut mi pulvinar, varius sem nec, commodo neque. Donec
      non congue diam. Integer et ligula vestibulum, fermentum metus vehicula, ultricies metus. Cras
      a ante finibus arcu interdum malesuada. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Mauris pharetra eu orci maximus pretium. Vestibulum cursus ultricies velit ut
      scelerisque. Suspendisse potenti. Quisque imperdiet ornare magna, vitae luctus metus rhoncus
      nec. Maecenas eleifend egestas iaculis. Donec molestie lorem id ex aliquam, vel cursus odio
      viverra. Suspendisse sodales facilisis sapien ac vestibulum. Suspendisse id velit scelerisque,
      tincidunt ex eu, interdum metus. Integer dictum elit nec cursus posuere. Pellentesque quis
      magna rutrum, tristique leo eget, pretium nunc. Nunc at feugiat lorem. Vivamus vitae neque
      mattis, fermentum tellus et, ullamcorper mi. Curabitur a tincidunt felis. Pellentesque at
      metus quis lacus tempor ultricies eget sit amet neque. Etiam sodales leo velit, at commodo
      mauris facilisis at. Nullam porta sem sit amet sodales scelerisque. Nunc non massa sem. Cras
      eu augue non nisl molestie bibendum. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Nulla aliquam faucibus nisl vitae sollicitudin. Phasellus convallis quis lectus sit
      amet auctor. Suspendisse pretium justo sed felis posuere volutpat. Maecenas et metus cursus,
      molestie sapien vel, malesuada urna. Phasellus velit arcu, tristique
    </div>
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
    <div className="font-semibold text-white text-2xl mt-6 p-2">Voice Your Opinion!</div>
    <textarea
      className="bg-cyan rounded-large p-4 mt-6 w-full font-semibold"
      placeholder="Write something..."
    ></textarea>
  </div>
);

export default IndividualEvent;
