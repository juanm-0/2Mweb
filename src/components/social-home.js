import React from 'react'
import { Divider, Grid, Container, Header, Icon } from 'semantic-ui-react'
import IconLink from './icon-link'

const SocialHome = () => (
  <Container>
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Header as='h1' textAlign='center'>Social</Header>
      </Grid.Row>
      <Divider hidden></Divider>
      <Grid.Row columns={3}>
        <Grid.Column>
            <IconLink name='instagram' size='huge' href='https://www.instagram.com/2mcreativelabs'></IconLink>
        </Grid.Column>
        <Grid.Column>
            <IconLink name='facebook' size='huge' href='https://www.facebook.com/2M-2368651086495781/'></IconLink>
        </Grid.Column>
        <Grid.Column>
            <IconLink name='youtube' size='huge' href='https://www.youtube.com/channel/UCY2LfsWNec_7ysZNn46hBUw'></IconLink>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default SocialHome