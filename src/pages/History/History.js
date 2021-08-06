import { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Collapse,
  Modal,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./historyStyles";

const History = () => {
  const [cHistory, setHistory] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [modalInfo, setModalInfo] = useState({});

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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <List
          component="nav"
          subheader={
            <ListSubheader
              component="div"
              className={classes.subheader}
            >
              Histórico de pesquisas
            </ListSubheader>
          }
        >
          {data.map((item, index) => {
            return (
              <ListItem
                className={classes.item}
                button
                onClick={() => {
                  setIsOpen(true);
                  setModalInfo(item);
                }}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`CPF : ${item.id}`}
                />
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              </ListItem>
            );
          })}

          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Container
              maxWidth="sm"
              className={classes.modalContainer}
            >
              <div className={classes.close}>
                <CloseIcon
                  fontSize="large"
                  color="error"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <Typography variant="h5" component="h1">
                CPF : {modalInfo.id}
              </Typography>
              <Typography component="h2" display="block">
                Nome : {modalInfo.patientName}
              </Typography>
              <Typography component="h2" display="block">
                Sobrenome : {modalInfo.lastName}
              </Typography>
              <Typography component="h2" display="block">
                Endereço : {modalInfo.address}
              </Typography>
              <Typography component="h2" display="block">
                Nome da mãe : {modalInfo.motherName}
              </Typography>
              <Typography component="h2" display="block">
                Nome do pai : {modalInfo.fatherName}
              </Typography>
              <Typography component="h2" display="block">
                Data de Nascimento : {modalInfo.birthDate}
              </Typography>
            </Container>
          </Modal>
        </List>
      </Container>
    </div>
  );
};
export default History;
