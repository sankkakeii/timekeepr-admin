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
import { Container } from '../../globalStyles';

const Signup = () => {
	const [data, setData] = useState({
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
			const url = "http://localhost:5000/api/client/sign-up";
			const { data: res } = await axios.post(url, data)

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

	// return (
	// 	<div className={styles.signup_container}>
	// 		<div className={styles.signup_form_container}>
	// 			<div className={styles.left}>
	// 				<h1>Welcome Back</h1>
	// 				<Link to="/login">
	// 					<button type="button" className={styles.white_btn}>
	// 						Sign In
	// 					</button>
	// 				</Link>
	// 			</div>
	// 			<div className={styles.right}>
	// 				<form className={styles.form_container} onSubmit={handleSubmit}>
	// 					<h1>Create Account</h1>
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
	// 						Sign Up
	// 					</button>
	// 				</form>
	// 			</div>
	// 		</div>
	// 	</div>
	// );


	return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Create Account</FormTitle>
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
              <FormButton type="submit">Sign Up</FormButton>
            </FormWrapper>
            <div className={styles.left}>
              <p>Already Have an Account?</p>
              <Link to="/login">
                <FormButton>
                  Sign In
                </FormButton>
              </Link>
            </div>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );

};

export default Signup;
