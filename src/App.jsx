import { Button, Container, Typography, Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Container maxWidth = 'xs' sx = {{ border: 2, borderColor: '#1ABC9C', p: 2 }}>
        <h1>My First App w/MUI</h1>
        <Typography variant = 'h2' sx = {{ boxShadow: 3, marginBottom: 2 }} >
          This is an h2 component
        </Typography>
        <Typography variant = 'h2' 
        component = 'span' 
        sx = {{
          boxShadow: 3,
          marginBottom: 2,
          color: '#049CDA',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 30,
          textAlign: 'center'
          }}
        >
          This is an h2 component that behaves like a paragraph
        </Typography>
        <Button variant="contained" sx = {{ bgcolor: '#04DAB1', marginBottom: 2, marginTop: 2 }}>
          1st MUI Button
        </Button>
        <Box
          sx ={{
            backgroundColor: '#50B2DA',
            p: 1, textAlign: 'center'
          }}
          component= 'span'
        >
          Is not a Box, is a span
        </Box>
      </Container>

    </>
  )
}

export default App;