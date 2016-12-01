import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native'

export default class WinningScore extends Component {
  constructor(props) {
    super(props);
  }

  _setWinningScore(num) {
    this.setState({
      winningScore: num
    })
    console.log(this.state.winningScore);
  }
  render() {
    return(
      <View>
        <Text>
          Winning Score: <TextInput style={{height:22, width: 30, backgroundColor: 'gray'}} onChangeText={this._setWinningScore.bind(this)}></TextInput>
        </Text>
      </View>
    )
  }
}
