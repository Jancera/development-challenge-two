import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "visible",
    },
  },
  formContainer: {
    [theme.breakpoints.between("xs", "md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0em",
    },
  },
  drawingContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "90vh",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "85vh",
    },
  },
  addDrawing: {
    maxWidth: "700px",
    minWidth: "200px",
    width: "100%",
    opacity: "0.6",
    [theme.breakpoints.between("xs", "md")]: {
      maxWidth: "300px",
      minWidth: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "0px",
      height: "0px",
    },
  },
  image: {
    maxWidth: "700px",
  },
  text: {
    fontSize: "20px",
    margin: "30px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0px",
    },
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
}));

export default useStyles;
