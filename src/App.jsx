import * as React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

  function ModeSelect() {
    const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    //console.log('Selected mode:', selectedMode);
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-dark-light-mode"
        id="dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
        <div style={{alignItems:'center', display:'flex',gap:'5px'}}> 
        <LightModeIcon fontSize='small'/>Light
        </div>
        </MenuItem>
        <MenuItem value="dark">
        <div style={{alignItems:'center', display:'flex',gap:'5px'}}> 
        <DarkModeIcon fontSize='small'/>Dark
        </div>
        </MenuItem>
        <MenuItem value="system">
        <div style={{alignItems:'center', display:'flex',gap:'5px'}}> 
        <SettingsBrightnessIcon fontSize='small'/>System
        </div>
        </MenuItem>
      
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

export default function App() {
  return (
    <>
     <ModeSelect />
     <hr />
      <ModeToggle />
      <hr />
      <a>chu bth</a>
      <Typography variant="body2" color="text.secondary">
        Test theme
      </Typography>
      <Button variant="contained">Hello world</Button>
    </>
  )
}
