/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import BleManager from 'react-native-ble-manager';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const btInit = () => {
  BleManager.start({showAlert: true})
  .then(()=>{
    console.log('BLE Module Initialized')
  })
}

const btScan = () => {
  BleManager.scan([], 15, true)
  .then(()=>{
    console.log('scan started')
  })
}

const btReadMac = () => {
  BleManager.readRSSI('A441DCCE-5C0E-4E42-A1D9-3A7421223FFC')
    .then((rssi) => {
      console.log(`Current MAC: ${rssi}`);
    })
}

const btConnect = () => {
  BleManager.connect('A441DCCE-5C0E-4E42-A1D9-3A7421223FFC')
  //BleManager.connect('37D6F7BD-C2FC-49AE-85A6-BED24D8A2CED')
    .then(() => {
      console.log('connected');
    })
    .catch((error) => {
      console.log(error);
    })
}


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My React Native BLE Project!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title="init" onPress={btInit}></Button>
        <Button title="scan" onPress={btScan}></Button>
        <Button title="connect" onPress={btConnect}></Button>
        <Button title="read MAC" onPress={btReadMac}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
