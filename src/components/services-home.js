import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ImageLink from './image-link'

const ServicesHome = () => (
  <Grid relaxed >
    <Grid.Row centered columns={1}>
      <Grid.Column mobile={30} tablet={30} computer={15}>
        <Header as='h2' textAlign='center'>Services</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={3}>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photography'></ImageLink>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
         <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Illustration'></ImageLink>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
         <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-video' text='Video'></ImageLink>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ServicesHome