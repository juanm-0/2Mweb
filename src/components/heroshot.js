import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const HeroShot = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <br />
        <br/>
      </Grid.Column>
      <Grid.Column>
        TEXT GOES HERE
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default HeroShot