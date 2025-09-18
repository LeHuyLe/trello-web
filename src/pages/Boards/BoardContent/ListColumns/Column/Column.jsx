import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'
import CloudIcon from '@mui/icons-material/Cloud'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '@/utils/sorts'

function Column({ column }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (


    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      ml: 2,
      borderRadius: '6px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.BoardContentHeight} - ${theme.spacing(5)})`
    }}>
      {/* header */}
      <Box sx={{
        height : (theme) => theme.trello.Columns_header_height,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

      }}>
        <Typography sx={{
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem'
        }} variant='h6'>
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title="More Options">
            <ExpandMoreIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-coclumn-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-coclumn-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit">Add New Crat</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCutIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit">Cut</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit">Copy</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPasteIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit">Paste</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon><CloudIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit" noWrap>Archive this column</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><DeleteIcon fontSize="small" /></ListItemIcon>
              <Typography variant="inherit" noWrap>Remove this column</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* list */}
      <ListCards cards={orderedCards} />
      {/* footer */}
      <Box sx={{
        height : (theme) => theme.trello.Columns_footer_height,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Button startIcon={<AddCardIcon />}>Add New Card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>


    </Box>
  )
}

export default Column