import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source src="/assets/CarParkingGarage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <section className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="py-4 px-4 md:h-[400px] font-Montserrat font-bold flex flex-col justify-center items-center align-middle text-center gap-10 rounded-lg ">
          <h3 className="md:text-4xl text-3xl text-white font-Montserratbg py-10 px-20 rounded-lg bg-teal-800 bg-opacity-60">
            Intelligence Smart Parking System
          </h3>

          <button className="w-60 font-kanit bg-teal-700 hover:bg-teal-900 text-white text-3xl py-4 px-4 mt-2 rounded-2xl font-bold">
            <Link to="/login">Login Now</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
