/*jshint esversion: 6 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class InitialDialogue extends Component {

  render() {
    return (
      <View>
      <View>
        <Text>{"Hi!"}</Text>
        <Text>{"Adulting is hard. I get it."}</Text>
        <Text>{"Let's try to make it a bit easier"}</Text>
      </View>
      <Button
        onPress={() => {
          Actions.mainHome();
        }}
      >
      Next
     </Button>
      </View>
    )
  }
}
  // render() {
  //   return (
  //     // <View>
  //       <View>
  //         <Text>{this.props.description}</Text>
  //         <TouchableHighlight onPress={this.props.onForward}>
  //           <Text>Next</Text>
  //         </TouchableHighlight>
  //       </View>

        // <Navigator
        //   initialRoute={{id: 'InitialDialogue', name: 'Dialogue', index: 1}}
        //   renderScene={(route, navigator) =>
        //     <MainHome description={route.description}
        //     // Function to call when a new scene should be displayed
        //     onForward={() => {
        //       const nextIndex = route.index + 1;
        //         navigator.push({
        //           description: "Main Home Page",
        //           index: nextIndex,
        //         });
        //       }}
        //     />
        //   }
        // />
      // </View>
//     )
//   }
// }

// InitialDialogue.propTypes = {
//   description: PropTypes.string.isRequired,
//   onForward: PropTypes.func.isRequired,
// };
