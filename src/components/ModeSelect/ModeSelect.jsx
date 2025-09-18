
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
    const selectedMode = event.target.value
    //console.log('Selected mode:', selectedMode);
    setMode(selectedMode)
  }
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="label-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-dark-light-mode"
        id="dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ alignItems:'center', display:'flex', gap:'5px' }}>
            <LightModeIcon fontSize='small'/>Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ alignItems:'center', display:'flex', gap:'5px' }}>
            <DarkModeIcon fontSize='small'/>Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ alignItems:'center', display:'flex', gap:'5px' }}>
            <SettingsBrightnessIcon fontSize='small'/>System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}


export default ModeSelect
