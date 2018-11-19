import React, { Component } from 'react'
import { Button, Divider, Form, Modal } from 'semantic-ui-react'

export default class ContactModal extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  state = { modalOpen: false, firstName: '', lastName: '', email: '', subject: '', message: '' }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const emailjs = require('../../node_modules/emailjs-com/dist/email')
    emailjs.send('mailgun', 'template_IhLkXBN2', {
      'subject': this.state.subject,
      'from_firstname': this.state.firstName,
      'from_lastname': this.state.lastName,
      'from_email': this.state.email,
      'message': this.state.message
    },
      'user_6c5VkuY1yPHfiKQfIJ6Dd');
    this.setState({ modalOpen: false })
  }

  handleOpenModal = () => this.setState({ modalOpen: true })

  render() {
    return (
      <Modal 
        size='small' 
        trigger={<Button onClick={this.handleOpenModal} basic>CONTACT</Button>} 
        basic 
        closeIcon
        open={this.state.modalOpen}>
        <Modal.Header>CONTACT</Modal.Header>
        <Modal.Content>
          <Form inverted size='small' key='small'>
            <Form.Group widths='equal'>
              <Form.Field required label='First Name' control='input' placeholder='First Name' name='firstName' onChange={this.handleChange} />
              <Form.Field required label='Last Name' control='input' placeholder='Last Name' name='lastName' onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required label='Email Address' control='input' placeholder='Email Address' name='email' onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required label='Subject' control='input' placeholder='Subject' name='subject' onChange={this.handleChange} />
            </Form.Group>
            <Form.TextArea required label='Message' placeholder='Message' name='message' onChange={this.handleChange} />
            <Divider hidden />
          </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={this.handleSubmit} inverted type='submit'>SEND IT</Button>
        </Modal.Actions>
      </Modal>
    );
  }

} 