import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
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
  subheader: {
    fontSize: "20px",
    margin: "1em 0em",
    [theme.breakpoints.down("xs")]: {
      margin: "0em 0em",
    },
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: "1em",
  },
  modalContainer: {
    marginTop: "30vh",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "1em",
  },
  close: {
    display: "flex",
    justifyContent: "flex-end",
  },
  progressContainer: {
    justifyContent: "center",
    display: "flex",
  },
  error: {
    color: "red",
  },
  circularProgress: {
    color: "#03fc03",
  },
}));

export default useStyles;
