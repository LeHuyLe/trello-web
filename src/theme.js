
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
// Create a theme instance.
const appBarHeight = '58px'
const boardBarHeight = '60px'
const BoardContentHeight = `calc(100vh - ${appBarHeight} - ${boardBarHeight})`
const Columns_header_height = '50px'
const Columns_footer_height = '56px'


const theme = extendTheme({
  trello: {
    appBarHeight: appBarHeight,
    boardBarHeight: boardBarHeight,
    BoardContentHeight: BoardContentHeight,
    Columns_header_height: Columns_header_height,
    Columns_footer_height: Columns_footer_height
  },
  colorSchemes: {
    light: {
      palette: {
        primary: blue,
        secondary: { main: '#ff9800' },
        background: { default: '#f9fafb', paper: '#ffffff' },
        text: { primary: '#1f2937', secondary: '#6b7280' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        secondary: { main: '#f48fb1' },
        background: { default: '#0d1117', paper: '#161b22' },
        text: { primary: '#e5e7eb', secondary: '#9ca3af' }
      }
    }
  },
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar':{
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#ced0da',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: '#bfc2cf'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root:({ theme }) => ({
          color: theme.palette.mode === 'dark' ? '#e5e7eb' : theme.palette.primary.main,
          fontSize: '0.9rem'
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root:{
          '&.MuiTypography-body1':{
            fontSize: '0.88rem'
          }

        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.mode === 'dark' ? '#e5e7eb' : theme.palette.primary.main,
            fontSize: '0.9rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.mode === 'dark' ? '#e5e7eb' : theme.palette.primary.main
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.mode === 'dark' ? '#e5e7eb' : theme.palette.primary.main
              }
            },
            //to dam vien
            '& fieldset': {
              borderWidth: '1px !important'
            }

          }
        }
      }
    }
  }
})

export default theme
