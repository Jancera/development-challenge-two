import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import homepage from "../../assets/homepage.svg";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div>
        <h2 className="smallText">
          Estamos aqui para lhe ajudar!
        </h2>
        <h1 className="bigText">
          Encontre
          <br />
          informações sobre pacientes
        </h1>

        <div className="buttons">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.push("/pesquisar")}
          >
            Pesquisar
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.push("/adicionar")}
          >
            Adicionar
          </Button>
        </div>
      </div>
      <img
        className="homepage-draw"
        src={homepage}
        alt="Logo"
      />
    </div>
  );
};
export default Home;
