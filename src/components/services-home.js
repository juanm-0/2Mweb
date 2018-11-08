import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import ImageLink from './image-link'

const ServicesHome = () => (
  <Grid relaxed >
    <Grid.Row>
      <Grid.Column mobile={30} tablet={30} computer={15}>
        <Header as='h2' textAlign='center'>Services</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <ImageLink></ImageLink>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <ImageLink></ImageLink>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ServicesHome