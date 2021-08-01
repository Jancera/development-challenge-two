import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "4px",
  },
  bigText: {
    fontSize: "64px",
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
