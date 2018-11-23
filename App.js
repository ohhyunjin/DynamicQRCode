import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        text: 'scanned',
    };

    setInterval(() => {
      this.setState(previousState => (
        {
           text: previousState.text + (Math.floor(Math.random() * 100) + 1).toString(),
        }
      ))
    }, 15000);
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.text}
          size={330}
          bgColor='purple'
          fgColor='#F5FCFF'/>
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
});
