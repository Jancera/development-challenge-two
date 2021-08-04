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

const CardInfo = ({ data, setIsEdit }) => {
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

  const deleteUser = (id) => {
    const response = await aws.delete(`/delete`);
  };

  return (
    <>
      <Card className={classes.card}>
        <div>
          <CardContent>
            <Typography variant="h5" component="h1">
              CPF : {data.id}
            </Typography>
            <Typography component="h2" display="block">
              Nome : {data.patientName}
            </Typography>
            <Typography component="h2" display="block">
              Sobrenome : {data.lastName}
            </Typography>
            <Typography component="h2" display="block">
              Endereço : {data.address}
            </Typography>
            <Typography component="h2" display="block">
              Nome da mãe : {data.motherName}
            </Typography>
            <Typography component="h2" display="block">
              Nome do pai : {data.fatherName}
            </Typography>
            <Typography component="h2" display="block">
              Data de Nascimento : {data.birthDate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                setIsEdit(true);
              }}
            >
              Editar
            </Button>
            <RedButton
              color="secondary"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Apagar
            </RedButton>
          </CardActions>
        </div>
      </Card>
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        size="large"
      >
        Pesquisar novamente
      </Button>
    </>
  );
};

export default CardInfo;
