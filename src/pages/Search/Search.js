import {
  TextField,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./searchStyles";
import searchDrawing from "../../assets/search.svg";

const data = axios.patch();

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.drawingContainer}>
        <img
          className={classes.searchDrawing}
          src={searchDrawing}
          alt="Search Drawing"
        />
      </div>
      <Container
        className={classes.mainContainer}
        maxWidth="sm"
      >
        <Typography className={classes.text}>
          Para realizar a pesquisa, precisamos do CPF a ser
          consultado.
        </Typography>
        <form className={classes.form}>
          <TextField
            label="CPF"
            variant="outlined"
            placeholder="xxx.xxx.xxx-xx"
            color="secondary"
            required
            fullWidth
            className={classes.input}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            onClick={() => console.log("clicked")}
          >
            Pesquisar
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default Search;
