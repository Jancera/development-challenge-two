import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

const CardInfo = ({ data, setIsEdit }) => {
  return (
    <Card>
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
          onClick={(e) => {
            e.preventDefault();
            setIsEdit(true);
          }}
        >
          Editar
        </Button>
        <Button>Apagar</Button>
      </CardActions>
    </Card>
  );
};

export default CardInfo;
