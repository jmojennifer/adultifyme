import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';
import Logo from './Logo';
import Star from './Star';

class AppHeader extends Component {

  taskCreate() {
    Actions.taskCreateScreen();
  }

  recurringTaskCreate() {
    Actions.recurringTaskCreateScreen();
  }

  render() {
    return (
      <View>
        <View style={styles.row1AppHeaderStyle}>
          <View>
            <Logo />
          </View>
          <View>
            <Star />
          </View>
        </View>
        <View>
          <CardSection style={styles.appHeaderCardSectionStyle}>
            <Button onPress={this.taskCreate.bind(this)}>
              Add Single Task
            </Button>
            <Button onPress={this.recurringTaskCreate.bind(this)}>
              Add Recurring Task
            </Button>
          </CardSection>
        </View>
      </View>
    );
  }
}

const styles = {
  row1AppHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  row2AppHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  starMenuStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10
  },
  buttonStyle: {
    flex: -1,
  },
  appHeaderCardSectionStyle: {
    backgroundColor: '#D5C2AD',
    borderColor: '#D5C2AD'
  }
};

const mapStateToProps = (state) => {
  const { starCount } = state.starCounts;
  return { starCount };
};

export default connect(mapStateToProps, {})(AppHeader);
