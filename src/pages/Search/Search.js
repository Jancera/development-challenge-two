import { useState } from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import aws from "../../api/aws";
import useStyles from "./searchStyles";
import searchDrawing from "../../assets/search.svg";
import CardInfo from "../../components/CardInfo/CardInfo";
import CardEdit from "../../components/CardEdit/CardEdit";

const Search = () => {
  const [id, setId] = useState("");
  const [result, setResult] = useState({});
  const [isSearching, setIsSearching] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const classes = useStyles();
  console.log(result);
  const getUser = async (user) => {
    try {
      const response = await aws.get(`/${user}`);
      setResult(response.data.Item);
      setIsSearching(false);
    } catch (err) {
      console.log(err);
    }
  };

  let tempData = {
    id: "1",
    patientName: "Patient",
    lastName: "last name",
    motherName: "mother",
    fatherName: "father",
    address: "address",
    birthDate: "2021-02-02",
  };

  return (
    <div className={classes.container}>
      <Container
        className={classes.mainContainer}
        maxWidth="sm"
      >
        {isSearching ? (
          <>
            <Typography className={classes.text}>
              Para realizar a pesquisa, precisamos do CPF a
              ser consultado.
            </Typography>
            <form className={classes.form}>
              <TextField
                label="CPF"
                variant="outlined"
                placeholder="xxx.xxx.xxx-xx"
                color="secondary"
                required
                fullWidth
                className={classes.input}
                value={id}
                onChange={(event) =>
                  setId(event.target.value)
                }
              />
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  getUser(id);
                }}
              >
                Pesquisar
              </Button>
            </form>
          </>
        ) : isEdit ? (
          <CardEdit data={result} setIsEdit={setIsEdit} />
        ) : (
          <CardInfo data={result} setIsEdit={setIsEdit} />
        )}
      </Container>
      <div className={classes.drawingContainer}>
        <img
          className={classes.searchDrawing}
          src={searchDrawing}
          alt="Search Drawing"
        />
      </div>
    </div>
  );
};
export default Search;
