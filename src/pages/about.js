import React from 'react'
import Layout from '../components/layout'

import { Grid, Image, Container } from 'semantic-ui-react'

const AboutPage = () => (
  <Layout>
    <Grid>
      <Grid.Row centered>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' rounded fluid />
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h2>Who Are We?</h2>
      </Grid.Row>
    </Grid>

    <Grid columns={2} stretched>
      <Grid.Row centered columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular />
        </Grid.Column>
        <Grid.Column width={10} mobile={16} tablet={8} computer={5}>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default AboutPage

