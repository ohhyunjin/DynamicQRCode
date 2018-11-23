import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode';
import timer from 'react-native-timer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        seconds: 0,
        number: 1,
    };

    setInterval(() => {
      this.setState(previousState => (
        {
           seconds: previousState.seconds + 1,
           number: Math.floor(Math.random() * 100) + 1,
        }
      ))
  }, 1000);
    console.log(this.state.seconds);
    console.log(this.state.number);
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.number}
          size={330}
          bgColor='purple'
          fgColor='#F5FCFF'/>
        <Text>{this.state.seconds}</Text>
        <Text>{this.state.number}</Text>
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
