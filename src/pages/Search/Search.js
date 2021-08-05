import { useState, useReducer } from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import aws from "../../api/aws";
import useStyles from "./searchStyles";
import searchDrawing from "../../assets/search.svg";
import CardInfo from "../../components/CardInfo/CardInfo";
import CardEdit from "../../components/CardEdit/CardEdit";

const reducer = (state, action) => {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: action.payload };
    case "setData":
      return { ...state, data: action.payload };
    case "isEditing":
      return { ...state, isEditing: action.payload };
    case "isSearching":
      return { ...state, isSearching: action.payload };
    case "err":
      return { ...state, err: action.payload };
    default:
      return state;
  }
};

const initialState = {
  isSearching: true,
  isEditing: false,
  isLoading: false,
  err: false,
  data: {
    id: "",
    patientName: "",
    lastName: "",
    motherName: "",
    fatherName: "",
    address: "",
    birthDate: "yyyy-mm-dd",
  },
};

const Search = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [id, setId] = useState("");

  const classes = useStyles();

  const getUser = async (user) => {
    try {
      dispatch({ type: "isLoading", payload: true });
      const response = await aws.get(`/${user}`);
      dispatch({
        type: "setData",
        payload: response.data.Item,
      });
      dispatch({ type: "isLoading", payload: false });
      dispatch({ type: "isSearching", payload: false });
      setId("");
    } catch (e) {
      dispatch({ type: "isLoading", payload: false });
      dispatch({ type: "err", payload: true });
      console.log(e);
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
      value.push(response);
      cacheStorage.put(
        url,
        new Response(JSON.stringify(value))
      );
    }
  };

  return (
    <div className={classes.container}>
      <Container
        className={classes.mainContainer}
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
                label="CPF"
                variant="outlined"
                placeholder="xxx.xxx.xxx-xx"
                color="secondary"
                required
                fullWidth
                className={classes.input}
                value={id}
                error={state.err}
                helperText="Erro de conexão"
                onChange={(event) =>
                  setId(event.target.value)
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
