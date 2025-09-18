import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
function ListColumns() {

  return (
    <Box sx={{
      bgcolor:'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track':{ m: 2 }
    }}>
      <Column />
      <Column />

      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content', 
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ffffff3d')
      }}>
        <Button
          startIcon={<AddToPhotosIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
           Add New Column
        </Button>

      </Box>
    </Box>
  )
}

export default ListColumns