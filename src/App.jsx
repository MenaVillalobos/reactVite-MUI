import { Button, Container, Typography, colors, rgbToHex } from "@mui/material";

const App = () => {
  return (
    <>
      <Container maxWidth = 'xs' sx = {{ border: 2, borderColor: '#1ABC9C' }}>
        <h1>My First App w/MUI</h1>
        <Typography variant = 'h2' sx = {{ boxShadow: 3, marginBottom: 2 }} >
          This is an h2 component
        </Typography>
        <Typography variant = 'h2' 
        component = 'span' 
        sx = {{ boxShadow: 3, marginBottom: 2, color: '#049CDA', display: 'flex', justifyContent: 'center' }} >
          This is an h2 component that behaves like a paragraph
        </Typography>
        <Button variant="contained" sx = {{ bgcolor: '#04DAB1', marginBottom: 2, marginTop: 2 }}>
          1st MUI Button
        </Button>
      </Container>
    </>
  )
}

export default App;