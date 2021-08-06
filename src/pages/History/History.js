import { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Modal,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import aws from "../../api/aws";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./historyStyles";

const History = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState([]);
  const [modalInfo, setModalInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadHistory = async () => {
      const cacheStorage = await caches.open("history");
      const cachedResponse = await cacheStorage.match(
        "https://localhost:3000"
      );
      if (cachedResponse !== undefined) {
        let value = await cachedResponse.json();
        setData(value);
      } else {
        setIsEmpty(true);
      }
    };
    loadHistory();
  }, []);

  const loadModal = async (user) => {
    try {
      setIsLoading(true);
      const response = await aws.get(`/${user}`);
      setModalInfo(response.data.Item);
      setIsLoading(false);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };

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
              {isEmpty
                ? "Nenhum item para mostrar"
                : "Histórico de pesquisas"}
            </ListSubheader>
          }
        >
          {data.map((item, index) => {
            return (
              <ListItem
                className={classes.item}
                key={index}
                button
                onClick={() => {
                  setIsOpen(true);
                  loadModal(item.id);
                }}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`CPF : ${
                    item.id
                  }, pesquisado em ${item.date.slice(
                    0,
                    10
                  )} `}
                />
              </ListItem>
            );
          })}

          <Modal open={isOpen} onClose={handleClose}>
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

              {isLoading ? (
                <div className={classes.progressContainer}>
                  {errorMessage !== "" ? (
                    <Typography className={classes.error}>
                      {errorMessage}
                    </Typography>
                  ) : (
                    <CircularProgress
                      className={classes.circularProgress}
                      size={100}
                    />
                  )}
                </div>
              ) : (
                <>
                  <Typography variant="h5" component="h1">
                    CPF : {modalInfo.id}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Nome : {modalInfo.patientName}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Sobrenome : {modalInfo.lastName}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Endereço : {modalInfo.address}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Nome da mãe : {modalInfo.motherName}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Nome do pai : {modalInfo.fatherName}
                  </Typography>
                  <Typography
                    component="h2"
                    display="block"
                  >
                    Data de Nascimento :{" "}
                    {modalInfo.birthDate}
                  </Typography>
                </>
              )}
            </Container>
          </Modal>
        </List>
      </Container>
    </div>
  );
};
export default History;
