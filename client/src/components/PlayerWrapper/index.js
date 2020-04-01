import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import AddMovieForm from "../AddMovieForm";
import PreloaderAdaptive from "../Preloader/Adaptive";
import useStyles from "./useStyles";

const PlayerWraper = () => {
  const classes = useStyles();
  const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      id
      name
      url
      startPoint
    }
  }
`;
  const { data = {}, loading = true, refetch } = useQuery(GET_MOVIES);
  const{ getMovies: movies = [] } = data;

  const [activeIndex, setActiveIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(false);
  const [message, setMessage] = useState("");

  const player = useRef(null);

  const loopVideo = () => {
    setActiveIndex((activeIndex + 1) % movies.length);
  };

  const CHEK_ID = gql`
  query checkUserId {
    id @client
  }
`;
  const { data: { id} } = useQuery(CHEK_ID);

  const PLAY_MOVIE = gql`
  mutation playMovie( $id: ID!) {
    playMovie(id: $id) {
      message
      status
    } 
  }
`;
  const [playMovie] = useMutation(PLAY_MOVIE);
  const STOP_MOVIE = gql`
  mutation stopMovie( $id: ID!) {
    stopMovie(id: $id) {
      message
      status
    } 
  }
`;
  const [stopMovie] = useMutation(STOP_MOVIE);

  const handlePlay = () => {
    if (play) {
      setPlay(false);
      setTimeout(function () {
        if (player.current === null) {
          return
        }
        if (!player.current.props.playing) stopMovie({variables: { id}})
        .then( ({ data: { stopMovie: { message }, }, }) => {
          console.log(message);
          setMessage(message);
        })
          .catch(error => {
            console.log(error);
          });
      },  30000);
    } else {
      playMovie({variables: { id }})
        .then(
          ({ data: { playMovie: { message, status }, }, }) => {
            console.log(message);
            setMessage(message);
            if (status === "success" && message === "You can watch movie") {
              setPlay(true);
            }
          })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const UPDATE_MOVIE = gql`
  mutation updateMovie( $id: ID!, $startPoint: Int!) {
    updateMovie(id: $id, startPoint: $startPoint) {
      message
      status
    } 
  }
`;
  const [updateMovie] = useMutation(UPDATE_MOVIE);
  const handlePause = () => {
    const pauseTime = parseInt(player.current.getCurrentTime(), 10);
    console.log(pauseTime);
    updateMovie({
      variables: {
        id: movies[activeIndex].id,
        startPoint:  pauseTime
      },
    })
      .then(
      ({ data: { updateMovie: { message, status }, }, }) => {
        if (status === "success" && message === "Movie successfully updated") {
          refetch();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChangeMovie = (index) => {
    setActiveIndex(index);
  };

  return loading ? ( <PreloaderAdaptive />
  ) : (
    <Container className={classes.container}>
      <AddMovieForm refetch={refetch} />
      {movies.length ? (
        <div>
          <div className={audio ? classes.player_wrapper_audio : classes.player_wrapper}>
            <ReactPlayer
              ref={player}
              className={classes.player}
              url={movies[activeIndex].url}
              playing={play}
              controls
              onEnded={() => loopVideo()}
              width={audio ? "0%" : "100%"}
              height="100%"
              onPause={() => handlePause()}
              config={{ youtube: {
                playerVars: { start: 0, enablejsapi: 1, origin: "http://localhost:3000", disablekb: 1, modestbranding: 1 },
                }}}
            />
          </div>
          <div className={classes.player_controls}>
            <Button className={classes.player_btn} onClick={() => handlePlay()}>
              {play ? "Stop" : "Play"}
            </Button>
            <Button
              className={classes.player_btn}
              onClick={()=> setAudio(prevState => !prevState)}
            >
              {audio ? "Add video" : "Audio only"}
            </Button>
          </div>
          <Typography className={classes.message}>
            {message}
          </Typography>
        </div>
      ) : (
        <Typography variant="h3" className={classes.emptyPlayerList}>
          Player list is empty
        </Typography>
      )}
      {movies.length && (
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Track Name</TableCell>
                <TableCell align="center">Active Track</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie, index) => {
                return (
                  <TableRow key={movie.id}>
                    <TableCell component="th" scope="row">
                      {movie.name}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={activeIndex === index}
                        onClick={() =>  handleChangeMovie(index)}
                      />
                    </TableCell>
                    <TableCell align="right" />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default PlayerWraper;
