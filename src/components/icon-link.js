import React from 'react'
import { Container, Icon } from 'semantic-ui-react'

const IconLink = props => (
  <Container>
    <a href={props.href}>
      <Icon name={props.name} size={props.size} circular inverted fitted/>
    </a>
  </Container>
)

export default IconLink