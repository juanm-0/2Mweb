import React from 'react'
import { Grid, Container, Header, Image } from 'semantic-ui-react'

const SocialHome = () => (
  <Container>
  <Grid >
    <Grid.Row centered columns={1}>
      <Grid.Column mobile={30} tablet={30} computer={15}>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={1}>
      <Grid.Column mobile={30} tablet={30} computer={15}>
        <Header as='h1' textAlign='center'>Social</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={3}>
      <Grid.Column mobile={16} tablet={8} computer={2}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular size='small'/>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={2}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular size='small'/>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={2}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular size='small'/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
)

export default SocialHome