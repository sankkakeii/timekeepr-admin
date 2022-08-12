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
import { Container } from '../../globalStyles';

const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${process.env.REACT_APP_TIMEKEEPR_API}/client/sign-up`;
			const { data: res } = await axios.post(url, data)

			// navigate("/login");
			console.log('signUpSuccess');
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

export default SignUp;
