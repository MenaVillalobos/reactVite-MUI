import { Button, Container, Typography, Box, colors } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const App = () => {
  return (
    <>
      <Container maxWidth = 'xs' sx = {{ border: 2, borderColor: '#1ABC9C', p: 2, marginTop: 4 }}>
        <Container 
        maxWidth = 'lg'
        sx = {{
            display: 'flex',
            justifyContent: 'space-between' ,
          }} >
          <h1>My First App w/MUI</h1>
          <Button
            aria-label = 'addPhoto'
            onClick={ () => alert( 'smile! 📸')}
            sx={{ p: 0 }}
          >
            <AddAPhotoIcon fontSize = 'large' />
          </Button>
        </Container>
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
        <Container sx = {{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button 
            sx = {
              { bgcolor: 'secondary',
              marginBottom: 2,
              marginTop: 2
              }
            } 
            onClick = { () => {
              alert( 'handling click' );
            } }>
            TEXT
          </Button>
          <Button
          variant = 'contained'
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
          variant = 'contained'
          sx = {
            { bgcolor: 'secondary',
            marginBottom: 2,
            marginTop: 2 
            }
          } 
          href='https://github.com/MenaVillalobos/reactVite-MUI'
          >
            LINK
          </Button>
          <Button
          variant = 'outlined'
          sx = {
            { bgcolor: 'secondary',
            marginBottom: 2,
            marginTop: 2 
            }
          } 
          >
            OUTLINED
          </Button>
        </Container>
        <Box
          sx ={{
            backgroundColor: 'primary.box',
            p: 1, textAlign: 'center',
            color: 'white'
          }}
        >
          This is a Box, not a div
        </Box>
        <Container sx = {{
            display: 'flex',
            justifyContent: 'center',
            padding: 1
          }} >
          <Button
            variant = 'contained'
            startIcon = { <FavoriteIcon style={ {color: 'red'} } /> }
            onClick = { () => {
              alert( 'you liked this 🥰' );
            }}
          >
            LIKE
          </Button>
          <Button
            variant = 'outlined'
            endIcon = { <FavoriteBorderIcon/> }
            onClick = { () => {
              alert( 'you disliked this 😞' );
            }}
          >
            DISLIKE
          </Button>
        </Container>
      </Container>
    </>
  )
}

export default App;