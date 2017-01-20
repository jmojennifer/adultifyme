import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';
import { CardSection, Input } from './common';

class TaskForm extends Component {
  render() {
    return (
      <View>
      <CardSection style={styles.formCardSection}>
        <Input
          label="Title"
          placeholder="i.e. Take Vitamin C"
          value={this.props.title}
          onChangeText={text => this.props.formUpdate({ prop: 'title', value: text })
          }
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Description"
          placeholder="Take 2 pills each evening with a full glass of water"
          value={this.props.description}
          onChangeText={text => this.props.formUpdate({ prop: 'description', value: text })}
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Personal Motivation"
          placeholder="i.e. Let's not get sick!"
          value={this.props.personalMotivation}
          onChangeText={text => this.props.formUpdate({ prop: 'personalMotivation', value: text })}
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Text style={styles.pickerTextStyle}>Category</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.category}
          onValueChange={selection => this.props.formUpdate({ prop: 'category', value: selection })}
        >
          <Picker.Item label="Finance" value="Finance" />
          <Picker.Item label="Health/Medical" value="Health/Medical" />
          <Picker.Item label="Fitness" value="Fitness" />
          <Picker.Item label="Career" value="Career" />
          <Picker.Item label="Personal Wellness" value="Personal Wellness" />
          <Picker.Item label="Household" value="Household" />
          <Picker.Item label="Social" value="Social" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Due Date"
          placeholder="i.e. 1/27/2017"
          value={this.props.dueDate}
          onChangeText={text => this.props.formUpdate({ prop: 'dueDate', value: text })}
        />
      </CardSection>

      <CardSection style={styles.formCardSection}>
        <Input
          label="Time Due"
          placeholder="i.e. 1:14PM"
          value={this.props.timeDue}
          onChangeText={text => this.props.formUpdate({ prop: 'timeDue', value: text })}
        />
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10
  },
  pickerStyle: {
    flex: 1,
    marginHorizontal: 25
  },
  formCardSection: {
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8'
  }
};

const mapStateToProps = (state) => {
  const { title, description, personalMotivation, category, dueDate, timeDue } = state.taskForm;

  return { title, description, personalMotivation, category, dueDate, timeDue };
};

export default connect(mapStateToProps, { formUpdate })(TaskForm);
