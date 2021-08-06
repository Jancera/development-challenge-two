import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
  },
  drawingContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "90%",
  },
  addDrawing: {
    maxWidth: "700px",
    minWidth: "200px",
    width: "100%",
    opacity: "0.6",
  },
  image: {
    maxWidth: "700px",
  },
  text: {
    fontSize: "20px",
    margin: "30px 0px",
  },
  inputContainer: {
    margin: "0px 20px",
  },
  input: {
    margin: "0.5em 0em",
  },
  errorMessage: {
    color: "red",
    margin: "20px 0px",
  },
  successMessage: {
    color: "green",
    margin: "20px 0px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circularProgress: {
    position: "absolute",
    color: "#03fc03",
  },
});

export default useStyles;
