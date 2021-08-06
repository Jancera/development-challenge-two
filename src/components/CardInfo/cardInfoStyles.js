import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  card: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circularProgress: {
    position: "absolute",
    color: "#ff3d00",
  },
  errorMessage: {
    color: "red",
  },
  button: {
    marginTop: "5em",
  },
});

export default useStyle;
