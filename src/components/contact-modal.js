import React from 'react'
import { Button, Divider, Form, Header, Image, Modal } from 'semantic-ui-react'

const ContactModal = () => (
  <Modal size='small' trigger={<Button basic>CONTACT</Button>} basic closeIcon>
    <Modal.Header>CONTACT</Modal.Header>
    <Modal.Content>
      <Form inverted size='small' key='small'>
        <Form.Group widths='equal'>
          <Form.Field required label='First Name' control='input' placeholder='First Name' />
          <Form.Field required label='Last Name' control='input' placeholder='Last Name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required label='Email Address' control='input' placeholder='Email Address' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required label='Subject' control='input' placeholder='Subject' />
        </Form.Group>
        <Form.TextArea required label='Message' placeholder='Message' />
        <Divider hidden />
      </Form>
    </Modal.Content>
    <Modal.Actions>
        <Button inverted type='submit'>SEND IT</Button>
    </Modal.Actions>
  </Modal>
)

export default ContactModal