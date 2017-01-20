/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { renderIf } from './common';

class Star extends Component {
  render() {
    const { starCount } = this.props;
    return (
      <View>
        {renderIf(starCount < 10 && starCount >= 0,
          <View>
            <Image
              style={styles.starStyleTo9}
              source={require('../images/star_gold_32.png')}
            />
            <Text
              style={styles.starCounterStyleTo9}
            >
              {starCount}
            </Text>
          </View>
        )}

        {renderIf(starCount < 100 && starCount > 9,
          <View>
            <Image
              style={styles.starStyleTo99}
              source={require('../images/star_gold_32.png')}
            />
            <Text
              style={styles.starCounterStyleTo99}
            >
              {starCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}


const styles = {
  starStyleTo9: {
    width: 30,
    height: 30,
  },

  starStyleTo99: {
    width: 45,
    height: 45,
  },

  starCounterStyleTo9: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 9.75,
    marginTop: 5
  },

  starCounterStyleTo99: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 12,
    marginTop: 13
  }
};

const mapStateToProps = (state) => {
  const { starCount } = state.notifications;
  return { starCount };
};

export default connect(mapStateToProps, {})(Star);
