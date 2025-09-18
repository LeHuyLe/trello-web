import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import CloudIcon from '@mui/icons-material/Cloud'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '@/utils/formatter'

const menu_style ={
  color: 'primary.main',
  bgcolor: 'background.paper',
  border:'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }

}
function BoardBar({ board }) {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap:2,
      overflowX: 'auto',
      borderTop: '1px solid #2196f3',
      '&::-webkit-scrollbar-track':{ m: 2 },
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#44444E' : '#ebecf0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={menu_style} icon={<DashboardIcon />}
          label={board?.title}
          onClick={() => {}}
        />
        <Chip sx={menu_style} icon={<LockPersonIcon />}
          label={capitalizeFirstLetter(board?.type)}
          onClick={() => {}}
        />
        <Chip sx={menu_style} icon={<CloudIcon />}
          label="Add To Google Drive"
          onClick={() => {}}
        />
        <Chip sx={menu_style} icon={<ElectricBoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip sx={menu_style} icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap:1,
            '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '15px', border: 'none', color:'white',
              cursor:'pointer', '&:first-of-type': { bgcolor: '#a4b0be' } }
          }}>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
          <Tooltip title="Members">
            <Avatar alt="TruongHuy" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          </Tooltip>
        </AvatarGroup>

      </Box>

    </Box>
  )
}

export default BoardBar
