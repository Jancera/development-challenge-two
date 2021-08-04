import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fafafa",
    height: "90vh",
    display: "flex",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "10em",
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
  button: {
    margin: "0em 2em",
  },
  drawingContainer: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  searchDrawing: {
    maxWidth: "700px",
    minWidth: "200px",
    width: "100%",
    opacity: "0.6",

    //marginRight: "300px",
  },
  "@global": {
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateX(5rem)",
      },
      "100%": {
        opacity: 0.8,
        transform: "translateX(0)",
      },
    },
  },
  selector: {
    animation: "fadeIn 1s ease-in-out", // --> this works
  },
  circularProgress: {
    position: "absolute",
    color: "#03fc03",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
