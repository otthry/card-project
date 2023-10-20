import Typography from '@mui/material/Typography'

export default function Appbar() {
  return (
    <nav>
      <div>
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
        Happy Moment </Typography>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
