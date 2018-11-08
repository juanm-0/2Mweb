import React from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

const ImageLink = props => (
  <Container>
    <Image src={props.imageUrl}/>
    <Header as='h4' textAlign='center' >{props.text}</Header>
    </Container>
)

export default ImageLink