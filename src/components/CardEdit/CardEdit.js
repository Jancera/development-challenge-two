import { TextField } from "@material-ui/core";
import useStyles from "./cardEditStyles";

const CardEdit = () => {
  const classes = useStyles();
  return (
    <div>
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
        error={false}
        helperText="Data de nascimento"
        onChange={(text) => {}}
      />
    </div>
  );
};

export default CardEdit;
