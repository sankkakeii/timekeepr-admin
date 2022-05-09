import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import { Container } from './globalStyles';


axios.defaults.withCredentials = true;

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/client/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.token)
			navigate("/dashboard");

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

	// return (
	// 	<div className={styles.login_container}>
	// 		<div className={styles.login_form_container}>
	// 			<div className={styles.left}>
	// 				<form className={styles.form_container} onSubmit={handleSubmit}>
	// 					<h1>Login to Your Account</h1>
	// 					<input
	// 						type="email"
	// 						placeholder="Email"
	// 						name="email"
	// 						onChange={handleChange}
	// 						value={data.email}
	// 						required
	// 						className={styles.input}
	// 					/>
	// 					<input
	// 						type="password"
	// 						placeholder="Password"
	// 						name="password"
	// 						onChange={handleChange}
	// 						value={data.password}
	// 						required
	// 						className={styles.input}
	// 					/>
	// 					{error && <div className={styles.error_msg}>{error}</div>}
	// 					<button type="submit" className={styles.green_btn}>
	// 						Sign In
	// 					</button>
	// 				</form>
	// 			</div>
	// 			<div className={styles.right}>
	// 				<h1>New Here ?</h1>
	// 				<Link to="/signup">
	// 					<button type="button" className={styles.white_btn}>
	// 						Sign Up
	// 					</button>
	// 				</Link>
	// 			</div>
	// 		</div>
	// 	</div>
	// );



	return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign In</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
                  <FormInput
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                  <FormInput
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                  />
                  {error && <div className={styles.error_msg}>{error}</div>}
                  <FormButton type="submit">
                    Sign In
                  </FormButton>

			  <div className={styles.right}>
					<p>New Here ?</p>
					<Link to="/signup">
						<FormButton > Sign up </FormButton>
					</Link>
				</div>
        
              {/* <FormButton type="submit">Signup</FormButton> */}
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );

};

export default Login;
