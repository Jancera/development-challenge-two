import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    display: "flex",
    [theme.breakpoints.between("xs", "md")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "85vh",
    },
  },
  grid: {
    marginTop: "-10em",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0em",
    },
  },
  smallText: {
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "4px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
      fontWeight: "bold",
      letterSpacing: "3px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      letterSpacing: "1px",
    },
  },
  bigText: {
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "30px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  buttonContainer: {
    marginLeft: "40px",
    [theme.breakpoints.between("xs", "md")]: {
      marginLeft: "20px",
    },
  },
  homepageDraw: {
    maxWidth: "600px",
    minWidth: "300px",
    width: "100%",
    [theme.breakpoints.between("xs", "md")]: {
      maxWidth: "400px",
      minWidth: "200px",
      width: "100%",
      marginRight: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "0px",
      height: "0px",
    },
  },
}));
export default useStyles;
