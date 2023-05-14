import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (<>
		

<div className="flex justify-center">
  <div className="w-full max-w-md">
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
        <Link to="/login">
          <button type="button" className="text-white bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200">
            Sign In
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Create Account</h1>
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-gray-800 font-medium mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={data.firstName}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-gray-800 font-medium mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={data.lastName}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-800 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={data.email}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-800 font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={data.password}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</div>

		{/* // <div className={styles.signup_container}>
		// 	<div className={styles.signup_form_container}>
		// 		<div className={styles.left}>
		// 			<h1>Welcome Back</h1>
		// 			<Link to="/login">
		// 				<button type="button" className={styles.white_btn}>
		// 					Sing in
		// 				</button>
		// 			</Link>
		// 		</div>
		// 		<div className={styles.right}>
		// 			<form className={styles.form_container} onSubmit={handleSubmit}>
		// 				<h1>Create Account</h1>
		// 				<input
		// 					type="text"
		// 					placeholder="First Name"
		// 					name="firstName"
		// 					onChange={handleChange}
		// 					value={data.firstName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="text"
		// 					placeholder="Last Name"
		// 					name="lastName"
		// 					onChange={handleChange}
		// 					value={data.lastName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="email"
		// 					placeholder="Email"
		// 					name="email"
		// 					onChange={handleChange}
		// 					value={data.email}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="password"
		// 					placeholder="Password"
		// 					name="password"
		// 					onChange={handleChange}
		// 					value={data.password}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				{error && <div className={styles.error_msg}>{error}</div>}
		// 				<button type="submit" className={styles.green_btn}>
		// 					Sing Up
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div> */}
		</>
	);
};

export default Signup;
