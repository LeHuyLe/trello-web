import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import GroupIcon from '@mui/icons-material/Group'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'

function ItemCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
          <Typography>Card Title</Typography>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/138558957_784546302405671_480631728484812619_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HsHOhXriC0sQ7kNvwFkgj5_&_nc_oc=AdmIgMFflgQUgd4d6C-RqHfAOURRY2vf1sux5b03qISzSP3JhlmsV0UlQQwQEGybQ48&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=RSdJg-3bx-v2gKQ544aliA&oh=00_AfWKjrMUp1BOXUk8QUwHvB1BEVJdu5AS2BVRfhq6dDYbIw&oe=68D4E7EE"
        title="" />
      <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
        <Typography>Truong Huy </Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>20</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>20</Button>
      </CardActions>
    </Card>
  )
}

export default ItemCard