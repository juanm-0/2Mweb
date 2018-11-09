import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ImageLink from './image-link'

const HeroShot = () => (
  <Grid verticalAlign='middle' centered>
    <Grid.Row centered columns={3}>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/' text=''></ImageLink>
      </Grid.Column>
      <Grid.Column>
        Organic, mostly locally sourced moments
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default HeroShot