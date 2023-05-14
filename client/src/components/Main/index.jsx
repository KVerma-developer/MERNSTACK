import Navbar from "../Navbar/Navbar";

import HomeVideo from "../../assets/background.jpg";








const Main = () => {
	
	

	return (
		<>
		
		<Navbar/>
		<div
      className="flex items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: `url(${HomeVideo})` }}
    >
     
	 <div className="text-center mt-24">
  <h1 className="text-5xl text-white font-bold">Welcome to the <p  className="inline-block text-6xl">
	 Profile</p>  <span className="text-yellow-300">Expend yourself!</span></h1>
</div>


      
    </div>

		</>
	);
};

export default Main;
