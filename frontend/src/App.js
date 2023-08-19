import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <div className="preloader"></div>
        <div className="scrollup fixed right-[2%] bottom-[3%] h-[45px] w-[40px] text-center rounded-[4px] "></div> */}
      <div className="z-0">
        <img
          className="h-screen w-screen"
          src="https://images2.alphacoders.com/596/596297.jpg"
          alt=""
        />
      </div>
      <div className="navbar fixed top-0 z-50 py-4 px-10 font-serif bg-transparent backdrop-filter backdrop-blur-lg shadow-md w-full">
        <div className="relative grid grid-cols-2 items-center">
          <a className="py-1 ml-5 mr-32 text-4xl  text-white" href="#">
            Rail Time Navigator
          </a>
          <div className="flex  gap-2 mx-10 text-lg align-text-bottom">
            <a
              className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
              href="#"
            >
              All Trains
            </a>
            <a
              className="px-6 py-3 font-semibold hover:text-pink-700 hover:text-xl ease-in-out duration-300"
              href="#"
            >
              Your Train
            </a>
          </div>
        </div>
      </div>
      <div className="home absolute top-32 mt-10 w-[50%] px-36">
        <div className="">
          <h1 className="text-5xl text-white font-serif mb-12 mt-20">
            Track your train !
          </h1>

          <div className="flex justify-between font-serif">
            <a
              className="bg-gradient-to-t from-red-500 via-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
              href="/alltrains"
            >
              View All Trains
            </a>
            <a
              className="bg-gradient-to-t from-red-500 via-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
              href="/yourtrain"
            >
              View Your Train
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
