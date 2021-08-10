import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    display: "flex",
    [theme.breakpoints.between("xs", "md")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "15vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "15vh",
    },
  },
  logo: {
    maxWidth: "350px",
    minWidth: "150px",
    width: "100%",
    marginRight: "5em",
    [theme.breakpoints.between("xs", "md")]: {
      maxWidth: "350px",
      minWidth: "150px",
      width: "100%",
      marginRight: "0em",
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "350px",
      marginTop: "1em",
    },
  },
}));

export default useStyles;
