import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PreloaderAdaptiveSmall from "../Preloader/AdaptiveSmall";
import useStyles from "./useStyles";

const AddMovieForm = ({ refetch }) => {
  const [newMovie, setNewMovie] = useState({
    name: "",
    url: "",
  });

  const classes = useStyles();

  const handleChange = event => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  const ADD_MOVIE = gql`
    mutation addMovie($name: String!, $url: String!) {
      addMovie(name: $name, url: $url) {
      status
      message
    }
  }
  `;
  const [addMovie, { loading }] = useMutation(ADD_MOVIE);

  const submitAddMovie = (e) => {
    e.preventDefault();
    addMovie({
      variables: {
        name: newMovie.name,
        url: newMovie.url
      },
    })
      .then(
        ({ data: { addMovie: { message, status }, }, }) => {
          if (status === "success" && message === "Movie successfully added") {
            refetch();
          }
        }
      )
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <ValidatorForm
        noValidate={false}
        onSubmit={e => submitAddMovie(e)}
        autoComplete="off"
        className={classes.root}
      >
        <TextValidator
          label="Track name"
          variant="outlined"
          name="name"
          value={newMovie.name}
          onChange={e => handleChange(e)}
          className={classes.textField}
          size="small"
          inputProps={{
            maxLength: 22,
            autoComplete: "track name",
          }}
          validators={["required", "matchRegexp:^[a-zA-Z0-9]{3,22}"]}
          errorMessages={[
            "this field is required",
            "name must be 3-22 characters (latin letters and numbers)",
          ]}
          FormHelperTextProps={{
            className: classes.helper,
          }}
        />

        <TextValidator
          className={classes.textField}
          variant="outlined"
          label="Input url"
          name="url"
          value={newMovie.url}
          onChange={e => handleChange(e)}
          size="small"
          inputProps={{
            autoComplete: "url",
          }}
          validators={["required", "matchRegexp:^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$"]}
          errorMessages={[
            "this field is required",
            "url must begin http: or https:...",
          ]}
          FormHelperTextProps={{
            className: classes.helper,
          }}
        />
        {loading? (
          <PreloaderAdaptiveSmall />
        ) : (
          <Button className={classes.btn} type="submit">
            Add track
          </Button>
        )}
      </ValidatorForm>
    </div>
  );
};

export default AddMovieForm;
