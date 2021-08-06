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
});

export default useStyles;
