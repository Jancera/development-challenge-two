import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-10em",
    zIndex: 1,
  },
  text: {
    marginTop: "1em",
    fontSize: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "2em 0em",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "0em 2em",
  },
  circularProgress: {
    position: "absolute",
    color: "#03fc03",
  },
  drawingContainer: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  searchDrawing: {
    maxWidth: "700px",
    minWidth: "200px",
    width: "100%",
    opacity: "0.6",
  },
}));

export default useStyles;
