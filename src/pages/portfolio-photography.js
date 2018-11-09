import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import ImageLink from '../components/image-link'
import Layout from '../components/layout'

const PortfolioPhotography = () => (
  <Layout>
    <Grid relaxed >
      <Grid.Row centered columns={1}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/' text='Photography'></ImageLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photo 1'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Photo 2'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-video' text='Photo 3'></ImageLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photo 4'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Photo 5'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-video' text='Photo 6'></ImageLink>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Layout>
)

export default PortfolioPhotography