import React from 'react'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    /**
     * lưu ý
     hàm SortableContext yêu cầu items là 1 mảng dạng [id-1, id-2, id-3...]
     chứ không phải là dạng object [{_id: id-1}, {_id: id-2}...]
     nếu không đúng thì vẫn kéo thả được nhưng không có animation
     */
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor:'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track':{ m: 2 }
      }}>
        {columns?.map(column => <Column key={column._id } column={column} />)}

        {/* add new columns */}
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
    </SortableContext>
  )
}

export default ListColumns