import React, { Component } from 'react';
import { DeviceEventEmitter, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import PushNotificationAndroid from 'react-native-push-notification';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';
import { starCountFetch } from '../actions';


class InitialDialogueScreen extends Component {

  componentWillMount() {
    const appSelf = this;

    PushNotification.configure({
        // (required) Called when a remote or local notification is opened or received
        onNotification: (notification) => {
          console.log('NOTIFICATION:', notification);
        }
    });

    (function () {
     PushNotificationAndroid.registerNotificationActions(
       ['Cancel Task', 'Completed Task', 'Cancel Occ', 'Completed Occ']
     );
     DeviceEventEmitter.addListener('notificationActionReceived', (action) => {
       console.log('Notification action received: ', action);
       const info = JSON.parse(action.dataJSON);
       const reminderUser = info.group;
       const userTasks = firebase.database().ref(`/users/${reminderUser}/tasks`);

        if (info.action === 'Cancel Task') {
          let task;
          const taskQuery = userTasks.orderByChild('reminderID').equalTo(info.id);
          taskQuery.on('child_added', snapshot => {
            task = snapshot;
          });

          if (task !== undefined) {
            firebase.database().ref(`/users/${reminderUser}/tasks/${task.key}`).remove();
          }
        } else if (info.action === 'Completed Task') {
          let task;
          const taskQuery = userTasks.orderByChild('reminderID').equalTo(info.id);
          taskQuery.on('child_added', snapshot => {
            task = snapshot;
          });
          if (task !== undefined) {
            firebase.database().ref(`/users/${reminderUser}/tasks/${task.key}`).remove();

            const userRef = firebase.database().ref(`/users/${reminderUser}/userProperties`);
            let star;
            userRef.on('child_added', snapshot => {
              star = snapshot;
              console.log(snapshot.val());
            });
            star = star.val() + 1;
            firebase.database().ref(`/users/${reminderUser}/userProperties`).set(
              { starCount: star }
            );

            appSelf.props.starCountFetch();
          }
       } else if (info.action === 'Cancel Occ') {
         console.log('Nothing done');
       } else if (info.action === 'Completed Occ') {
         const userRef = firebase.database().ref(`/users/${reminderUser}/userProperties`);
         let star;
         userRef.on('child_added', snapshot => {
           star = snapshot;
           console.log(snapshot.val());
         });
         star = star.val() + 1;
         firebase.database().ref(`/users/${reminderUser}/userProperties`).set(
           { starCount: star }
         );
         appSelf.props.starCountFetch();
       }
     });
   })();
 }

  onButtonPress() {
    Actions.main();
  }

  render() {
    return (
      <View>
        <View style={styles.spacingStyle}>
          <Text style={styles.textStyle}>
            Hi!
          </Text>
        </View>
        <View style={styles.spacingStyle}>
          <Image
            style={styles.IDSImageStyle}
            source={require('../images/IDSImage.png')}
          />
          <Text style={styles.textStyle}>
            Adulting is hard. I get it.
          </Text>
          <Text style={styles.textStyle}>
            Let's try to make it a bit easier.
          </Text>
            </View>
          <CardSection style={styles.initialDialogueCardSection}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Next
          </Button>
          </CardSection>
      </View>
    );
  }
}

const styles = {
  spacingStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textStyle: {
    justifyContent: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  initialDialogueCardSection: {
    backgroundColor: '#D5C2AD',
    borderColor: '#D5C2AD'
  },
  IDSImageStyle: {
    width: 100,
    height: 100
  }
};

export default connect(null, { starCountFetch })(InitialDialogueScreen);
