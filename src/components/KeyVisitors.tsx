import { keyVisitors } from '@/data/keyVisitors'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DefaultAvatar from '../assets/logos/DefaultAvatar.png'

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' }
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Keynote
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Meet incredible people who have made a difference in the world. Our
          speakers are experts in their fields, and they are here to share their
          knowledge and experience with you.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {keyVisitors.map((speaker) => (
          <Grid item key={speaker.name} xs={12} md={4} padding={4}>
            <CardBox sx={(theme) => ({})}>
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <Avatar
                    src={speaker.avatar ?? DefaultAvatar}
                    alt={speaker.name}
                  />
                  <Typography variant="h4">{speaker.name}</Typography>
                </Box>
                <Box display={'flex'} alignItems={'baseline'}></Box>
                <Divider sx={{ marginY: 2 }} />
                {speaker.experience.map((exp) => (
                  <Typography key={exp} variant="h6" sx={{ opacity: 0.8 }}>
                    <AutoAwesomeIcon
                      fontSize="small"
                      style={{
                        color: 'lightgray',
                        marginRight: '1rem',
                        marginLeft: '0.5rem'
                      }}
                    />
                    &nbsp;{exp}
                  </Typography>
                ))}
              </CardContent>
            </CardBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const Avatar = styled('img')({
  width: '50%',
  borderRadius: '50%',
  objectFit: 'cover'
})

const CardBox = styled(Card)(({ theme }) => ({
  padding: 24,
  transition:
    'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minHeight: 300,
  ':hover': {
    transform: 'scale(1.05)',
    border: 'none',
    boxShadow:
      theme.palette.mode === 'light'
        ? `0 8px 12px hsla(210, 98%, 42%, 0.2)`
        : `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}))