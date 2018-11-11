import React from 'react'
import { Container,Grid, Image } from 'semantic-ui-react'
import ImageLink from '../components/image-link'
import Layout from '../components/layout'

const PortfolioPhotography = () => (
  <Layout>
    <Container>
    <Grid relaxed >
      <Grid.Row centered columns={1}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' rounded fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h2>Photography</h2>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          Portraits, weddings, events, food, products. You name it, we deliver. Our photographers have one objective: To creatively express your best moments in one still frame.
            We take the time to fully understand you and your needs, and create photos that represent that unique identity.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photo 1'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Photo 2'></ImageLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photo 4'></ImageLink>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLink imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Photo 5'></ImageLink>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    </Layout>
)

export default PortfolioPhotography