import { useState } from "react";
import {
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import useStyles from "./cardEditStyles";

const CardEdit = ({ data, setIsEdit }) => {
  const [patientName, setPatientName] = useState(
    data.patientName
  );
  const [lastName, setLastName] = useState(data.lastName);
  const [address, setAddress] = useState(data.address);
  const [motherName, setMotherName] = useState(
    data.motherName
  );
  const [fatherName, setFatherName] = useState(
    data.fatherName
  );
  const [birthDate, setBirthDate] = useState(
    data.birthDate
  );
  const classes = useStyles();

  const RedButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ff3d00"),
      backgroundColor: "#ff3d00",
      "&:hover": {
        backgroundColor: "#8c2200",
      },
    },
  }))(Button);

  return (
    <>
      <TextField
        className={classes.input}
        label="CPF"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        disabled
        value={data.id}
      />
      <TextField
        className={classes.input}
        label="Nome"
        variant="outlined"
        placeholder="Nome"
        color="secondary"
        required
        fullWidth
        value={patientName}
        onChange={(value) => setPatientName(value)}
      />
      <TextField
        className={classes.input}
        label="Sobrenome"
        variant="outlined"
        placeholder="Sobrenome"
        color="secondary"
        required
        fullWidth
        value={lastName}
        onChange={(value) => setLastName(value)}
      />
      <TextField
        className={classes.input}
        label="Endereço"
        variant="outlined"
        placeholder="Endereço"
        color="secondary"
        required
        fullWidth
        value={address}
        onChange={(value) => setAddress(value)}
      />
      <TextField
        className={classes.input}
        label="Nome da mãe"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        fullWidth
        value={motherName}
        onChange={(value) => setMotherName(value)}
      />
      <TextField
        className={classes.input}
        label="Nome do pai"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        fullWidth
        value={fatherName}
        onChange={(value) => setFatherName(value)}
      />
      <TextField
        className={classes.input}
        label="Data de nascimento"
        color="secondary"
        type="date"
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={birthDate}
        onChange={(value) => setBirthDate(value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          setIsEdit(false);
        }}
      >
        Salvar
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Cancelar
      </Button>
    </>
  );
};

export default CardEdit;
