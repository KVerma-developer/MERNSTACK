import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
	<GoogleOAuthProvider clientId="463814550450-f87keme8vdif1a16ilgohpg977olcct6.apps.googleusercontent.com">
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
	</GoogleOAuthProvider>,
	document.getElementById("root")
);
