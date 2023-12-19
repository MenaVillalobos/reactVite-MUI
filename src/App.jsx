import { Button, Container, Typography, Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Container maxWidth = 'xs' sx = {{ border: 2, borderColor: '#1ABC9C', p: 2, marginTop: 4 }}>
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
        <Button 
          variant='text'
          sx = {
            { bgcolor: 'secondary',
            marginBottom: 2,
            marginTop: 2
            }
          } >
          TEXT
        </Button>
        <Button
        variant='contained'
        sx = {
          { bgcolor: 'secondary',
          marginBottom: 2,
          marginTop: 2
          }
        } 
        disabled>
          DISABLED
        </Button>
        <Button
        variant='contained'
        sx = {
          { bgcolor: 'secondary',
          marginBottom: 2,
          marginTop: 2 
          }
        } 
        href='http://localhost:5173/'>
          LINK
        </Button>
        <Box
          sx ={{
            backgroundColor: 'primary.box',
            p: 1, textAlign: 'center',
            color: 'white'
          }}
        >
          This is a Box, not a div
        </Box>
      </Container>

    </>
  )
}

export default App;