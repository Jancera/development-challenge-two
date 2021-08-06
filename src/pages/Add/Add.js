import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import useStyles from "./addStyles";
import aws from "../../api/aws";

const Add = () => {
  const [id, setId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [birthDate, setBirthDate] = useState("yyyy-mm-dd");

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
    id: id,
    patientName: patientName,
    lastName: lastName,
    address: address,
    motherName: motherName,
    fatherName: fatherName,
    birthDate: birthDate,
  };

  const handleAdd = async () => {
    try {
      const response = await aws.post("/add", editedInfo);
      console.log(response);
      setId("");
      setPatientName("");
      setLastName("");
      setAddress("");
      setMotherName("");
      setFatherName("");
      setBirthDate("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography className={classes.text}>
          Preencha as informações para adicionar ao nosso
          sistema.
        </Typography>
        <div className={classes.inputContainer}>
          <InputMask
            mask="999.999.999-99"
            value={id}
            onChange={(value) => setId(value.target.value)}
          >
            {() => (
              <TextField
                className={classes.input}
                label="CPF"
                color="secondary"
                variant="outlined"
                fullWidth
                required
              />
            )}
          </InputMask>

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
            error={false}
            helperText="Data de nascimento"
            value={birthDate}
            onChange={(value) =>
              setBirthDate(value.target.value)
            }
          />
        </div>

        <Grid
          className={classes.buttonContainer}
          container
          spacing={5}
        >
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              Adicionar
            </Button>
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
