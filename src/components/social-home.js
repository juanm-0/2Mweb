import React from 'react'
import { Divider, Grid, Container, Header, Icon } from 'semantic-ui-react'

const SocialHome = () => (
  <Container>
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Header as='h1' textAlign='center'>Social</Header>
      </Grid.Row>
      <Divider hidden></Divider>
      <Grid.Row columns={3}>
        <Grid.Column>
            <Icon name='instagram' size='huge' circular inverted fitted/>
        </Grid.Column>
        <Grid.Column>
            <Icon name='facebook' size='huge' circular inverted fitted/>
        </Grid.Column>
        <Grid.Column>
            <Icon name='youtube' size='huge' circular inverted fitted/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default SocialHome