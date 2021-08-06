import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
  },
  logo: {
    maxWidth: "350px",
    minWidth: "150px",
    width: "100%",
    marginRight: "5em",
  },
  button: {
    height: "10px",
    marginBottom: "10px",
    border: 0,
    background: "none",
  },
});

export default useStyles;
