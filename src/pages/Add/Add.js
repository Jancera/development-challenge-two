import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import RedButton from "../../components/RedButton";
import useStyles from "./addStyles";
import aws from "../../api/aws";
import drawing from "../../assets/add.svg";

const Add = () => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cpfError, setCpfError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] =
    useState(false);
  const newData = {
    id: id,
    patientName: patientName,
    lastName: lastName,
    address: address,
    motherName: motherName,
    fatherName: fatherName,
    birthDate: birthDate,
  };

  const handleAdd = async () => {
    if (id.length !== 11) {
      setCpfError(true);
      setErrorMessage("CPF precisa ter 11 caracteres");
    } else {
      try {
        setCpfError(false);
        setIsLoading(true);
        await aws.put("/add", newData);
        setId("");
        setPatientName("");
        setLastName("");
        setAddress("");
        setMotherName("");
        setFatherName("");
        setBirthDate("");
        setErrorMessage("");
        setIsLoading(false);
        setShowSuccessMessage(true);
        setTimeout(
          () => setShowSuccessMessage(false),
          2000
        );
      } catch (e) {
        setIsLoading(false);
        if (e.response.status === 400) {
          setErrorMessage(e.response.data.message);
        } else {
          setErrorMessage("Internal Server Error");
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.drawingContainer}>
        <img
          className={classes.addDrawing}
          src={drawing}
          alt="Adicionar"
        />
      </div>
      <Container maxWidth="sm">
        <Typography className={classes.text}>
          Preencha as informações para adicionar ao nosso
          sistema.
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            className={classes.input}
            label="CPF"
            color="secondary"
            variant="outlined"
            fullWidth
            value={id}
            onChange={(value) => setId(value.target.value)}
            error={cpfError}
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
            onChange={(value) =>
              setAddress(value.target.value)
            }
          />
          <TextField
            className={classes.input}
            label="Nome da mãe"
            variant="outlined"
            placeholder="Nome da mãe"
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
            placeholder="Nome do pai"
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
            error={false}
            helperText="Data de nascimento"
            value={birthDate}
            onChange={(value) =>
              setBirthDate(value.target.value)
            }
          />

          <Typography
            className={classes.errorMessage}
            align="center"
          >
            {errorMessage}
          </Typography>
          {showSuccessMessage ? (
            <Typography
              className={classes.successMessage}
              align="center"
            >
              Paciente adicionado
            </Typography>
          ) : null}
        </div>

        <Grid
          className={classes.buttonContainer}
          container
          spacing={5}
        >
          <Grid item>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd();
                }}
              >
                Adicionar
              </Button>
              {isLoading ? (
                <CircularProgress
                  className={classes.circularProgress}
                  size={30}
                />
              ) : null}
            </div>
          </Grid>
          <Grid item>
            <RedButton
              variant="contained"
              size="large"
              color="primary"
            >
              Cancelar
            </RedButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Add;
