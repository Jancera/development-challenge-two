import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import RedButton from "../RedButton";
import aws from "../../api/aws";
import useStyles from "./cardEditStyles";

const CardEdit = ({ data, dispatch }) => {
  const classes = useStyles();
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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const newData = {
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
      setIsLoading(true);
      await aws.patch("/edit", newData);
      dispatch({ type: "setData", payload: newData });
      dispatch({ type: "isEditing", payload: false });
      setIsLoading(false);
      setErrorMessage("");
    } catch (e) {
      setIsLoading(false);
      if (e.response.status === 400) {
        setErrorMessage(e.response.data.message);
      } else {
        setErrorMessage("Internal Server Error");
      }
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
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={data.id}
        disabled
      />
      <TextField
        className={classes.input}
        label="Nome"
        variant="outlined"
        placeholder="Nome"
        color="secondary"
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
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={birthDate}
        onChange={(value) =>
          setBirthDate(value.target.value)
        }
      />

      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          Salvar
        </Button>
        {isLoading ? (
          <CircularProgress
            className={classes.circularProgress}
            size={30}
          />
        ) : null}
      </div>

      <Typography
        className={classes.errorMessage}
        align="center"
      >
        {errorMessage}
      </Typography>

      <div className={classes.buttonContainer}>
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
      </div>
    </>
  );
};

export default CardEdit;
