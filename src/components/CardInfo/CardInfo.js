import { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
} from "@material-ui/core";
import RedButton from "../RedButton";
import aws from "../../api/aws";
import useStyle from "./cardInfoStyles";

const CardInfo = ({ data, dispatch }) => {
  const classes = useStyle();
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = async (user) => {
    try {
      setIsLoading(true);
      await aws.delete(`/${user}`);
      dispatch({ type: "setData", payload: {} });
      dispatch({ type: "isSearching", payload: true });
      setIsLoading(false);
      setErrMessage("");
    } catch (e) {
      if (e) {
        setIsLoading(false);
        if (e.response.status === 404) {
          setErrMessage(e.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h1">
            CPF : {data.id}
          </Typography>
          <Typography component="h2">
            Nome : {data.patientName}
          </Typography>
          <Typography component="h2">
            Sobrenome : {data.lastName}
          </Typography>
          <Typography component="h2">
            Endereço : {data.address}
          </Typography>
          <Typography component="h2">
            Nome da mãe : {data.motherName}
          </Typography>
          <Typography component="h2">
            Nome do pai : {data.fatherName}
          </Typography>
          <Typography component="h2">
            Data de Nascimento : {data.birthDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "isEditing",
                payload: true,
              });
            }}
          >
            Editar
          </Button>

          <div className={classes.buttonContainer}>
            <RedButton
              color="secondary"
              variant="contained"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                deleteUser(data.id);
              }}
            >
              Apagar
            </RedButton>
            {isLoading ? (
              <CircularProgress
                className={classes.circularProgress}
                size={30}
              />
            ) : null}
          </div>
        </CardActions>
        <Typography
          component="h2"
          className={classes.errorMessage}
        >
          {errMessage}
        </Typography>
      </Card>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "isSearching", payload: true });
        }}
      >
        Pesquisar novamente
      </Button>
    </>
  );
};

export default CardInfo;
