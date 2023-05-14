// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/auth";
// 			const { data: res } = await axios.post(url, data);
// 			localStorage.setItem("token", res.data);
// 			window.location = "/";
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here ?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sing Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;








////----------------------------------------tailwind css----------------------------------------
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login to Your Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="block w-full border border-gray-300 px-4 py-2 rounded-md mb-4"
          />
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200">
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <h1 className="text-lg mb-2">New Here?</h1>
          <Link to="/signup">
            <button type="button" className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
