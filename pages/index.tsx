import type { NextPage } from 'next'
import { Box, Grid } from '@material-ui/core'

const Home: NextPage = () => {
  return (
    <Box>
      <Grid>
        <Box>
            Art goes here
        </Box>
        <Box>
            Something else goes here
        </Box>
        <Box>
            Something else goes here as well
        </Box>
      </Grid>
    </Box>
  )
}

export default Home
