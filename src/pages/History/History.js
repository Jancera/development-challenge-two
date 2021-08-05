import { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Collapse,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import useStyles from "./historyStyles";

const History = () => {
  const [cHistory, setHistory] = useState({});
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const cacheStorage = await caches.open("history");
      const cachedResponse = await cacheStorage.match(
        "https://localhost:3000"
      );
      let value = await cachedResponse.json();
      setData(value);
    };
    loadHistory();
  }, []);

  return (
    <Container maxWidth="sm">
      <List
        className={classes.root}
        component="nav"
        subheader={
          <ListSubheader component="div">
            Histórico
          </ListSubheader>
        }
      >
        {data.map((item, index) => {
          return (
            <ListItem className={classes.item} button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={`CPF : ${item.id}`}
                onClick={() => {}}
              />
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
          );
        })}

        <Collapse in={open}>
          {/* <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List> */}
        </Collapse>
      </List>
    </Container>
  );
};
export default History;
