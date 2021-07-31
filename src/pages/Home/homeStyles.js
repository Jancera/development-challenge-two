import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    fontSize: "1.2em",
    letterSpacing: "4px",
    fontWeight: "bold",
  },
  bigText: {
    fontSize: "4em",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  buttonContainer: {
    marginLeft: "40px",
  },
  homepageDraw: {
    maxWidth: "600px",
    minWidth: "300px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});
export default useStyles;
