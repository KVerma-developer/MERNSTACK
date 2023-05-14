// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import Signup from "./components/Singup";
// import Login from "./components/Login";
// import Contact from "./components/ContactFom/Contact";
// import About from "./components/About/about";
// import Google from "./components/Google/Google";

// ///--------------------
// import React, { useState } from 'react';


// ///---------------------



// function App() {

// 	const [google, setGoogle] = useState(null);

// 	const user = localStorage.getItem("token");

// 	return (
// 		// <Switch>
// 		<Routes>
// 			{user && <Route path="/" exact element={<Main />} />}
// 			{user && <Route path="/contact" exact element={<Contact />} />}
// 			{user && <Route path="/about" exact element={<About />} />}
// 			<Route path="/signup" exact element={<Signup />} />
// 			<Route path="/login" exact element={<Login />} />
			
// 			<Route path="/" element={<Navigate replace to="/login" />} />
// 			<Route path="/contact" element={<Navigate replace to="/login" />} />
// 			<Route path="/about" element={<Navigate replace to="/signup" />} />
// 			<Route path="/google" element={<Google />} />

// 			{/* ///------------------ */}

// 			<Route exact path="/">
//              <Main google={google} />
//             </Route>
// 			<Route exact path="/login">
//             <Login
//              onSuccess={(codeResponse) => setGoogle(codeResponse)}
//              onError={(error) => console.log('Login Failed:', error)}
//             />
//             </Route>
// 			{/* ///------------------ */}


// 		</Routes>
// 		// </Switch>
// 	);
// }

// export default App;





///-------------------------------------------------------------------


import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Contact from "./components/ContactFom/Contact";
import About from "./components/About/about";
import Google from "./components/Google/Google";

///--------------------



///---------------------



function App() {

	

	const user = localStorage.getItem("token");

	return (
		// <Switch>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/contact" exact element={<Contact />} />}
			{user && <Route path="/about" exact element={<About />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/contact" element={<Navigate replace to="/login" />} />
			<Route path="/about" element={<Navigate replace to="/signup" />} />
			<Route path="/google" element={<Google />} />



		</Routes>
		// </Switch>
	);
}

export default App;

