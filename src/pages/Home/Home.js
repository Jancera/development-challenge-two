import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import homepage from "../../assets/homepage.svg";
import useStyles from "./homeStyles";

import purple from "@material-ui/core/colors/purple";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid
      className={classes.container}
      container
      spacing={4}
    >
      <Grid item xs={6} sm={6}>
        <Container maxWidth="sm">
          <Typography
            className={classes.smallText}
            color="textSecondary"
            component="h2"
            variant="h2"
          >
            ESTAMOS AQUI PARA LHE AJUDAR!
          </Typography>

          <Typography
            className={classes.bigText}
            component="h1"
            variant="h1"
          >
            Encontre
            <br />
            informações sobre pacientes
          </Typography>

          <Grid
            className={classes.buttonContainer}
            container
            spacing={4}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => history.push("/pesquisar")}
              >
                Pesquisar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => history.push("/adicionar")}
              >
                Adicionar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={6} sm={6}>
        <img
          className={classes.homepageDraw}
          src={homepage}
          alt="Logo"
        />
      </Grid>
    </Grid>
  );
};
export default Home;
