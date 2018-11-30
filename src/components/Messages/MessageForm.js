import React from 'react';
import { Input, Button, Segment } from 'semantic-ui-react';

class MessageForm extends React.Component {
  render() {
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          style={{ marginBottom: '0.7em' }}
          label={<Button icon="add" />}
          labelPosition="left"
          placeholder="Write your message"
        />
        <Button.Group icon widths="2">
          <Button
            color="orange"
            content="Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="orange"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessageForm;
