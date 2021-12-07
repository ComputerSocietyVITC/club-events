import { ReactComponent as Blob3 } from '../Assets/Svg/blob3.svg';
const Dashboard = () => {
  return (
    <div>
      <Blob3 className="float-left h-96 w-2/3 ml-3" />
      <div className="text-right text-white mr-24 mb-20 ">
        <div className="text-5xl font-semibold mt-24">
          <h1>DASHBOARD</h1>
        </div>
        <br />
        <div>
          <h3>
            View Club Details, Archived Events,
            <br />
            Event Analytics and more!
          </h3>
        </div>
        <br />
        <div>
          <button className="mt-2 mb-8 ml-4 py-2 max-w-xs bg-lightergreen hover:bg-green-500 text-black font-bold   text-sm border border-blue-700 pl-20 pr-20  ">
            <div className="text-1xl ">VIEW CLUB PROFILE</div>
          </button>
        </div>
        <div>
          <button className="mt-2 mb-8 ml-4 py-2  max-w-xs bg-lightergreen hover:bg-green-500 text-black font-bold   text-sm border border-blue-700 pl-20 pr-20 ">
            <div className="text-1xl">EVENT ANALYTICS</div>
          </button>
        </div>
        <div>
          <button className="mt-2 mb-8 ml-4 py-2 max-w-xs bg-lightergreen hover:bg-green-500 text-black font-bold   text-sm border border-blue-700 pl-20 pr-20 ">
            <div className="text-1xl">CREATE NEW EVENT</div>
          </button>
        </div>
        <div>
          <button className="mt-2 mb-8 ml-4 py-2 max-w-xs bg-lightergreen hover:bg-green-500 text-black font-bold   text-sm border border-blue-700 pl-20 pr-20 ">
            <div className="text-1xl">ARCHIVED EVENTS</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
