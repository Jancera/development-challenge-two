import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const Pesquisar = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="CPF"
        variant="outlined"
        placeholder="xxx.xxx.xxx-xx"
        color="secondary"
        fullWidth
      />
    </Container>
  );
};
export default Pesquisar;
