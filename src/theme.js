
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: blue, // xanh dương nhẹ, dễ chịu
        secondary: { main: '#ff9800' }, // cam pastel để nhấn mạnh
        background: { default: '#f9fafb', paper: '#ffffff' }, // nền sáng, nhẹ
        text: { primary: '#1f2937', secondary: '#6b7280' } // xám đậm & xám trung tính
      }
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' }, // xanh dương nhạt trên nền tối
        secondary: { main: '#f48fb1' }, // hồng pastel nhẹ
        background: { default: '#0d1117', paper: '#161b22' }, // giống GitHub dark
        text: { primary: '#e5e7eb', secondary: '#9ca3af' } // trắng xám dịu, không quá gắt
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
            backgroundColor: 'rgba(100, 100, 100, 0.6)',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: 'rgba(100, 100, 100, 0.8)'
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
          color: theme.palette.primary.main,
          fontSize: '0.9rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.light,
            fontSize: '0.9rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
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
