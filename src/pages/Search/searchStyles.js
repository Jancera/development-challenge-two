import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    overflow: "hidden",
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "85vh",
    },
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
    height: "90vh",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "85vh",
    },
  },
  searchDrawing: {
    maxWidth: "700px",
    minWidth: "200px",
    width: "100%",
    opacity: "0.6",
    [theme.breakpoints.between("xs", "md")]: {
      maxWidth: "500px",
      minWidth: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "300px",
      minWidth: "200px",
    },
  },
}));

export default useStyles;
