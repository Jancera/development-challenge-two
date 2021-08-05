import { useState } from "react";
import {
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import aws from "../../api/aws";
import useStyles from "./cardEditStyles";

const CardEdit = ({ data, dispatch }) => {
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

  const editedInfo = {
    id: data.id,
    patientName: patientName,
    lastName: lastName,
    address: address,
    motherName: motherName,
    fatherName: fatherName,
    birthDate: birthDate,
  };

  const handleSave = async () => {
    try {
      await aws.patch("/edit", editedInfo);
      dispatch({ type: "setData", payload: editedInfo });
      dispatch({ type: "isEditing", payload: false });
    } catch (e) {
      console.log(e);
    }
  };

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
        onChange={(value) =>
          setPatientName(value.target.value)
        }
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
        onChange={(value) =>
          setLastName(value.target.value)
        }
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
        onChange={(value) => setAddress(value.target.value)}
      />
      <TextField
        className={classes.input}
        label="Nome da mãe"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        fullWidth
        value={motherName}
        onChange={(value) =>
          setMotherName(value.target.value)
        }
      />
      <TextField
        className={classes.input}
        label="Nome do pai"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        fullWidth
        value={fatherName}
        onChange={(value) =>
          setFatherName(value.target.value)
        }
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
        onChange={(value) =>
          setBirthDate(value.target.value)
        }
      />
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        Salvar
      </Button>
      <RedButton
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "isEditing", payload: false });
        }}
      >
        Cancelar
      </RedButton>
    </>
  );
};

export default CardEdit;
