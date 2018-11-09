import React, { Component } from 'react'
import { Menu, Dropdown, Container } from 'semantic-ui-react'

import { Link } from 'gatsby'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const LinkedDropdownItem = ({ children, ...props }) => (
  <Dropdown.Item as={Link} activeClassName='active' {...props}>{children}</Dropdown.Item>
)

const ForwardedLink = React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
))

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu 
      fixed={true}
      size='large'
      stackable
      fluid
    >
      <Container>
        <LinkedItem position='left center' to='/' exact>Home</LinkedItem>
        <Dropdown as={ForwardedLink} position='right' to='/page-2' text='Services' simple item>
          <Dropdown.Menu>
            <LinkedDropdownItem to='/portfolio-photography'>Photography</LinkedDropdownItem>
            <LinkedDropdownItem to='/portfolio-illustration'>Illustration</LinkedDropdownItem>
            <LinkedDropdownItem to='/portfolio-video'>Video</LinkedDropdownItem>
          </Dropdown.Menu>
        </Dropdown>
        <LinkedItem to='/404'>About</LinkedItem>
        <LinkedItem to='/404'>CONTACT</LinkedItem>
      </Container>
    </Menu>
    )
  }
}
