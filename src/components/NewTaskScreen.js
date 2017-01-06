import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class TaskCreateScreen extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="i.e. Take Vitamin C"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="Take 2 pills each evening with a full glass of water"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Personal Motivation"
            placeholder="i.e. Let's not get sick!"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Category"
            placeholder="i.e. Health"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Due Date"
            placeholder="i.e. 1/27/2017"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Time Due"
            placeholder="5:00PM"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default TaskCreateScreen;
