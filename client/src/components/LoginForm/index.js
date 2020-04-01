import React, { useState } from "react";
import gql from "graphql-tag";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import LoginContent from "./LoginContent";

const LoginForm = ({ isModalOpen, setIsModalOpen }) => {
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setIsModalOpen(false);
  };

  const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        user {
          name
          id
        }
        status
        message
        token
      }
    }
  `;

  const client = useApolloClient();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const submitLogin = (e, user) => {
    e.preventDefault();
    loginUser({ variables: { email: user.email, password: user.password }})
      .then(
        ({ data: { loginUser: { user: { name, id }, message, status, token }, }, }) => {
          setMessage(message);
          if (status === "success") {
              localStorage.setItem("authToken", token);
              client.writeData({ data: { isAuthenticated: true, name, id } });
          }
        }
      )
      .catch(error => {
        console.log(error);
        setMessage("Error. Something went wrong");
      });
  };

  return (
    <>
      <LoginContent
        handleOpen={handleOpen}
        submitLogin={submitLogin}
        open={isModalOpen}
        message={message}
        error={error}
        isLoading={loading}
      />
    </>
  );
};

export default LoginForm;
