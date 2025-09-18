import React from 'react'
import Box from '@mui/material/Box'
import ItemCard from './Card/ItemCard'

function ListCards() {
  return (

    <>
      <Box sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(
          ${theme.trello.BoardContentHeight} -
          ${theme.spacing(5)} -
          ${theme.trello.Columns_header_height} -
          ${theme.trello.Columns_footer_height}
          )`,
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
      }}>

        <ItemCard />
        <ItemCard temporaryHideMedia />
      </Box>
    </>
  )
}

export default ListCards