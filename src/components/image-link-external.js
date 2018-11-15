import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

const ImageLinkExternal = props => (
  <Container>
    <Image as='a' href={props.href} src={props.imageUrl} target='_blank'/>
    <Header as='h4' textAlign='center' >{props.text}</Header>
  </Container>
)

export default ImageLinkExternal