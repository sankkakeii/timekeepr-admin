import React from "react";
// import "../component/Fill.scss";

import { useState } from "react";
import axios from "axios";

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
import { Container } from '../../../globalStyles';

axios.defaults.withCredentials = true;

// const authAxios = axios.create({
//   baseURL: "http://localhost:5000/api/client/",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   }
// });


const AddUserForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phone: "",
    token: localStorage.getItem("token"),
  });
	const [setError] = useState("");

	
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/client/add-user";

      // const token = localStorage.getItem("token");
      console.log(data)
			await axios.put(url, data);

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

  const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Add User</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              <div className="ist">
                <label for="FirstName"></label>
                {" "}
                <FormInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={data.companyName}
                  required
                ></FormInput>
        
                <label for="Role"></label>
                <FormInput
                  type="text"
                  placeholder="Role"
                  name="role"
                  id="role"
                  onChange={handleChange}
                  value={data.companyName}
                  required
                ></FormInput>
 
                <label for="Email"></label>
                <FormInput
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={data.companyName}
                  required
                ></FormInput>
              </div>

              <div className="second">
                <label for="LastName"></label>
                <FormInput
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={data.companyName}
                  required
                ></FormInput>
 

                <label for="Phone number"></label>
                <FormInput
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  value={data.companyName}
                  required
                ></FormInput>
              </div>

              <br></br>
              <FormButton type="submit">add user</FormButton>
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );

};



export default AddUserForm;
