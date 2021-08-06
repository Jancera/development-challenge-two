import { useState, useReducer } from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import aws from "../../api/aws";
import { reducer, initialState } from "./searchReducer";
import useStyles from "./searchStyles";
import searchDrawing from "../../assets/search.svg";
import CardInfo from "../../components/CardInfo/CardInfo";
import CardEdit from "../../components/CardEdit/CardEdit";

const Search = () => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const getUser = async (user) => {
    if (user.length !== 11) {
      dispatch({ type: "err", payload: true });
      dispatch({
        type: "errMessage",
        payload: "CPF precisa ter 11 caracteres",
      });
    } else {
      try {
        dispatch({ type: "isLoading", payload: true });
        const response = await aws.get(`/${user}`);
        dispatch({
          type: "setData",
          payload: response.data.Item,
        });
        dispatch({ type: "isLoading", payload: false });
        dispatch({ type: "isSearching", payload: false });
        dispatch({ type: "err", payload: false });
        dispatch({ type: "errMessage", payload: "" });
        setId("");
      } catch (e) {
        dispatch({ type: "isLoading", payload: false });
        console.log(e.response);
        if (e.response.status === 404) {
          dispatch({ type: "err", payload: true });
          dispatch({
            type: "errMessage",
            payload: e.response.data.message,
          });
        } else {
          dispatch({ type: "err", payload: true });
          dispatch({
            type: "errMessage",
            payload: "Internal Server Error",
          });
        }
      }
    }
  };

  const addDataIntoCache = async (
    cacheName,
    url,
    response
  ) => {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    if (cachedResponse === undefined) {
      const data = new Response(JSON.stringify([response]));
      cacheStorage.put(url, data);
    } else {
      let value = await cachedResponse.json();
      value.unshift(response);
      if (value.length > 10) {
        value.pop();
      }
      cacheStorage.put(
        url,
        new Response(JSON.stringify(value))
      );
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Container
        className={classes.container}
        maxWidth="sm"
      >
        {state.isSearching ? (
          <>
            <Typography className={classes.text}>
              Para realizar a pesquisa, precisamos do CPF a
              ser consultado.
            </Typography>
            <form className={classes.form}>
              <TextField
                className={classes.input}
                label="CPF"
                variant="outlined"
                color="secondary"
                fullWidth
                error={state.err}
                helperText={
                  state.err
                    ? state.errMessage
                    : "11 caracteres, sem pontos e traços "
                }
                value={id}
                onChange={(value) =>
                  setId(value.target.value)
                }
              />

              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  size="large"
                  type="submit"
                  disabled={state.isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    getUser(id);
                    addDataIntoCache(
                      "history",
                      "https://localhost:3000",
                      { id: id, date: new Date() }
                    );
                  }}
                >
                  Pesquisar
                </Button>
                {state.isLoading ? (
                  <CircularProgress
                    className={classes.circularProgress}
                    size={30}
                  />
                ) : null}
              </div>
            </form>
          </>
        ) : state.isEditing ? (
          <CardEdit data={state.data} dispatch={dispatch} />
        ) : (
          <CardInfo data={state.data} dispatch={dispatch} />
        )}
      </Container>
      <div className={classes.drawingContainer}>
        <img
          className={classes.searchDrawing}
          src={searchDrawing}
          alt="Search Drawing"
        />
      </div>
    </div>
  );
};
export default Search;
