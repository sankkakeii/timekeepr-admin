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
	// FormLabel,
	// FormInputRow,
	// FormMessage,
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
			const url = `${process.env.REACT_APP_TIMEKEEPR_CORS}${process.env.REACT_APP_TIMEKEEPR_API}/client/login`;
			console.log(url);
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
					<Link to="/sign-up">
						<FormButton > Sign up </FormButton>
					</Link>
				</div>

            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );

};

export default Login;
