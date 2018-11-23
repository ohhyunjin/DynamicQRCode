import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode';
import TimerMixin from 'react-timer-mixin';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        seconds: 0,
        number: 1,
    };
    console.log(this.state.seconds);
  }

  tick() {
      this.setState(prevState => ({
          seconds: prevState.seconds + 1
      }));
  }

  componentDidMount() {
      this.interval = setInterval(() => this.tick.bind(this), 2000);
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  generateRandomNumber() {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      return randomNumber;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>First dynamic QR code app</Text>
        <QRCode
          value={this.state.number}
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
