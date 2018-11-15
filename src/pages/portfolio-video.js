import React from 'react'
import { Container,Grid, Image } from 'semantic-ui-react'
import ImageLinkExternal from '../components/image-link-external'
import Layout from '../components/layout'

const PortfolioVideo = () => (
  <Layout>
    <Container>
    <Grid relaxed >
      <Grid.Row centered columns={1}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' rounded fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h2>Video</h2>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          Need a promo video? A montage? A full length feature film? What platform are we using? 
          Our videographers strive to express your brand or moments creatively and accurately. Whether it's a YouTube video, or an Instagram ad or post,
          we're out to create the best content possible that suits your needs.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLinkExternal imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='https://www.youtube.com/watch?v=mo0j77UzsY8' text='Making Matcha'></ImageLinkExternal>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLinkExternal imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='https://www.youtube.com/watch?v=Y0xEFLDwslY' text='Life Sized Murals'></ImageLinkExternal>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLinkExternal imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='/portfolio-photography' text='Photo 4'></ImageLinkExternal>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageLinkExternal imageUrl='https://react.semantic-ui.com/images/wireframe/image.png' href='portfolio-illustration' text='Photo 5'></ImageLinkExternal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    </Layout>
)

export default PortfolioVideo