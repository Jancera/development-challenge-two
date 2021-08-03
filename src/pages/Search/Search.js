import { useState } from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import aws from "../../api/aws";
import useStyles from "./searchStyles";
import searchDrawing from "../../assets/search.svg";

const Search = () => {
  const [id, setId] = useState("");
  const classes = useStyles();

  const getUser = (user) => {
    try {
      const data = aws.get(`/${user}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            onClick={getUser(id)}
          >
            Pesquisar
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default Search;
