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
  navbar: {
    display: "flex",
    placeContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundSize: "auto",
    padding: "10px 10%",
    backgroundColor: "#f5f5f5",
  },
});

export default useStyles;
