import { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  withStyles,
} from "@material-ui/core";
import aws from "../../api/aws";
import useStyle from "./cardInfoStyles";

const CardInfo = ({ data, dispatch }) => {
  const [errMessage, setErrMessage] = useState("");
  const classes = useStyle();

  const RedButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ff3d00"),
      backgroundColor: "#ff3d00",
      "&:hover": {
        backgroundColor: "#8c2200",
      },
    },
  }))(Button);

  const deleteUser = async (id) => {
    try {
      await aws.delete(`/${id}`);
      dispatch({ type: "setData", payload: {} });
      dispatch({ type: "isSearching", payload: true });
      setErrMessage("");
    } catch (e) {
      if (e) {
        setErrMessage("Erro ao deletar usuário");
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
          <RedButton
            color="secondary"
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              deleteUser(data.id);
            }}
          >
            Apagar
          </RedButton>
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
        variant="outlined"
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
