import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import useStyles from "./addStyles";

const Add = () => {
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      "&:hover": {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  return (
    <Container maxWidth="sm">
      <Typography className={classes.text}>
        Preencha as informações para adicionar ao nosso
        sistema.
      </Typography>
      <div className={classes.inputContainer}>
        <TextField
          className={classes.input}
          label="CPF"
          variant="outlined"
          placeholder="xxx.xxx.xxx-xx"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Nome"
          variant="outlined"
          placeholder="Nome"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Sobrenome"
          variant="outlined"
          placeholder="Sobrenome"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Endereço"
          variant="outlined"
          placeholder="Endereço"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Nome da mãe"
          variant="outlined"
          placeholder="xxx.xxx.xxx-xx"
          color="secondary"
          fullWidth
        />
        <TextField
          className={classes.input}
          label="Nome do pai"
          variant="outlined"
          placeholder="xxx.xxx.xxx-xx"
          color="secondary"
          fullWidth
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
            onClick={() => console.log("clicked")}
          >
            Adicionar
          </Button>
        </Grid>
        <Grid item>
          <ColorButton
            variant="contained"
            size="large"
            color="primary"
          >
            Cancelar
          </ColorButton>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Add;
