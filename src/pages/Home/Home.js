import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import homepage from "../../assets/homepage.svg";
import useStyles from "./homeStyles";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const theme = useTheme();
  const matches = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid className={classes.grid} container spacing={4}>
        <Grid item md={6} sm={6} xs={12}>
          <Container maxWidth="md">
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
                  size={matches ? "small" : "large"}
                  onClick={() => history.push("/pesquisar")}
                >
                  Pesquisar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  size={matches ? "small" : "large"}
                  onClick={() => history.push("/adicionar")}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item md={6} sm={6} xs={false}>
          <img
            className={classes.homepageDraw}
            src={homepage}
            alt="Logo"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
