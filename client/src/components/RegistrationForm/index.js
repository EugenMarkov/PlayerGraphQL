import React, { useCallback, useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import RegistrationContent from "./RegistrationContent";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const updateUser = useCallback(() => {
    return {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
  }, [userData]);

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const REG_USER = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
      createUser(name: $name, email: $email, password: $password) {
        status
        message
      }
    }
  `;

  const user = updateUser();

  const [createUser, { loading }] = useMutation(REG_USER);

  const submitUserRegistration = () => {
    createUser({
      variables: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    })
      .then(
        ({ data: { createUser: { message, status }, }, }) => {
          setMessage(message);
          if (status === "success" && message === "Account successfully created") {
            setMessage(message);
          }
        }
      )
      .catch(error => {
        setMessage(error.message);
      });
  };

  return (
    <RegistrationContent
      submitRegistration={submitUserRegistration}
      handleChange={handleChange}
      handleClickShowPassword={handleClickShowPassword}
      newUserData={userData}
      showPassword={showPassword}
      message={message}
      loading={loading}
    />
  );
};

export default RegistrationForm;
