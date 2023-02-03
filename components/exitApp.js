import {Alert, BackHandler} from 'react-native';

function exitApp() {
  const backAction = () => {
    Alert.alert('Stop', 'Are you sure you wnat to go back', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );
}

export default exitApp;
