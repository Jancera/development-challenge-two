import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    margin: "0.5em 0em",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "1em 2em",
    width: "100%",
  },
  circularProgress: {
    position: "absolute",
    color: "#03fc03",
  },
  errorMessage: {
    color: "red",
  },
});

export default useStyles;
