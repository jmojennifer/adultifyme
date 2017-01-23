import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { renderIf } from './common';

class StarCountListItem extends Component {
  render() {
    const { starCount } = this.props.starCount;
    console.log('starCount Prop', this.props.starCount);
    return (
      <View>
        {renderIf(starCount < 10 && starCount >= 0,
          <View>
            <Image
              style={styles.starStyleTo9}
              source={require('../images/yellow-star.png')}
            />
            <Text style={styles.starCounterStyleTo9}>
              {starCount}
            </Text>
          </View>)
        }

        {renderIf(starCount < 100 && starCount > 9,
          <View>
          <Image
            style={styles.starStyleTo99}
            source={require('../images/yellow-star.png')}
          />
          <Text style={styles.starCounterStyleTo99}>
            {starCount}
          </Text>
          </View>)
        }
      </View>
    );
  }
}

const styles = {
  starCounterStyleTo9: {
    fontSize: 17,
    color: '#0A0908',
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 16.5,
    marginTop: 11
  },

  starCounterStyleTo99: {
    fontSize: 17,
    color: '#0A0908',
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 19,
    marginTop: 19
  },

  starStyleTo9: {
    width: 45,
    height: 45,
  },

  starStyleTo99: {
    width: 60,
    height: 60,
  }
};

export default StarCountListItem;
