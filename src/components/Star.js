/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { starCountFetch } from '../actions';
import { renderIf } from './common';

class Star extends Component {
  componentWillMount() {
    this.props.starCountFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.props.starCountFetch();
    // nextProps are the next set of props this component will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ thisStarCount }) {
    this.props.starCount = thisStarCount;
  }


  render() {
    const { starCount } = this.props;
    return (
      <View>

      {renderIf(starCount === 1,
        <View>
          <Image
            style={styles.starStyleTo9}
            source={require('../images/yellow-star.png')}
          />
          <Text style={styles.starCounterStyleAt1}>
            {starCount}
          </Text>
        </View>)
      }

        {renderIf(starCount < 10 && starCount >= 0 && starCount !== 1,
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

        {renderIf(starCount === 11,
          <View>
            <Image
              style={styles.starStyleTo99}
              source={require('../images/yellow-star.png')}
            />
            <Text style={styles.starCounterStyleAt11}>
              {starCount}
            </Text>
          </View>)
        }

        {renderIf(starCount < 100 && starCount > 9 && starCount !== 11,
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
    fontFamily: 'GloriaHallelujah',
    color: '#0A0908',
    position: 'absolute',
    marginLeft: 16.5,
    marginTop: 6
  },

  starCounterStyleAt1: {
    fontSize: 17,
    fontFamily: 'GloriaHallelujah',
    color: '#0A0908',
    position: 'absolute',
    marginLeft: 19,
    marginTop: 6
  },

  starCounterStyleTo99: {
    fontSize: 20,
    fontFamily: 'GloriaHallelujah',
    color: '#0A0908',
    position: 'absolute',
    marginLeft: 20,
    marginTop: 12
  },

  starCounterStyleAt11: {
    fontSize: 20,
    fontFamily: 'GloriaHallelujah',
    color: '#0A0908',
    position: 'absolute',
    marginLeft: 24,
    marginTop: 12
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

const mapStateToProps = (state) => {
  const thisStarCount = state.starCounts;
  return thisStarCount;
};

export default connect(mapStateToProps, { starCountFetch })(Star);
