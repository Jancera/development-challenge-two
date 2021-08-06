import { Button, withStyles } from "@material-ui/core";

const RedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#ff3d00"),
    backgroundColor: "#ff3d00",
    "&:hover": {
      backgroundColor: "#8c2200",
    },
  },
}))(Button);

export default RedButton;
