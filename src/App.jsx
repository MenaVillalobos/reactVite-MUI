import { Button, Container, colors, rgbToHex } from "@mui/material";

const App = () => {
  return (
    <>
      <Container maxWidth = 'xs' sx = {{border: 2, borderColor: '#1ABC9C'}}>
      <h1>My First App w/MUI</h1>
      <Button variant="contained" sx = {{bgcolor: '#04DAB1'}}>1st MUI Button</Button>
      </Container>
    </>
  )
}

export default App;