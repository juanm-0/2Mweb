import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ImageLink from './image-link'

const HeroShot = () => (
  <Grid verticalAlign='middle' textAlign='center'>
    <Grid.Row centered columns={3}>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <ImageLink imageUrl='https://react.semantic-ui.com/logo.png' href='/' text=''></ImageLink>
      </Grid.Column>
      <Grid.Column mobule={16} tablet={8} computer={5}>
         <Header as='h1' textAlign='center'>Organic, mostly locally sourced moments</Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default HeroShot