import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'
import { Link } from 'gatsby'

const ImageLink = props => (
  <Container>
    <Image as={Link} to={props.href} src={props.imageUrl}/>
    <Header as='h4' textAlign='center' >{props.text}</Header>
  </Container>
)

export default ImageLink