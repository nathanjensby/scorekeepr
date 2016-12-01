import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  TextInput
} from 'react-native';

import GenericContainer from './GenericContainer'

export default class GenericPlayer extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 0,
      text: ''
    }
  }

  _resetButton(){
    this.setState({
      total: 0,
      text: ''
    })
  }

  _addOne(){
    console.log('add');
    let newTotal = this.state.total + 1
    let winner = this.props.winScore
    console.log(newTotal);
    console.log(winner);
    this.setState({
      total: newTotal
    })
    if(newTotal === +winner){
      alert('Winner')
    }
  }

  _subtractOne(){
    console.log('subtract');
    let newTotal = this.state.total - 1
    console.log(newTotal);
    if (this.state.total === 0) {
      alert('No Points to Subtract')
    } else {
      this.setState({
        total: newTotal
      })
    }

  }

  _handleNameChange(text) {
    this.setState({text})
  }


  render() {
    let playNum = "Player "+this.props.playernumber.toString();
    return (
        <View style={styles.playerContainer}>
          <View style={{flexDirection:'row'}}>
            <TextInput style={[styles.teamNameInput, styles.pongText]} onChangeText={this._handleNameChange.bind(this)} placeholder={playNum} />
            <View style={{justifyContent:'center'}}>
              <Text style={styles.totalStyle}>Total: {this.state.total}</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableHighlight style={styles.pongButtons} onPress={this._addOne.bind(this)}>
              <Text style={styles.pongText}>Add 1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.pongButtons} onPress={this._subtractOne.bind(this)}>
              <Text style={styles.pongText}>Subtract 1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.pongButtons, {flex:1}]} onPress={this._resetButton.bind(this)}>
              <Text style={styles.pongText}>RESET</Text>
            </TouchableHighlight>
          </View>



        </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: '#009688',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  teamNameInput: {
    width: 190,
    height: 35,
    borderColor: 'white',
    borderWidth:1,
    margin:10,
    fontFamily:"Quicksand-Bold",
    color:'white',
    backgroundColor: '#54B2A9'
  },
  totalStyle: {
    fontFamily:"Quicksand-Bold",
    fontSize: 18,
    color:'white'
  },
  pongText: {
    fontFamily: "Quicksand",
    color: 'white'
  },
  pongButtons: {
    justifyContent:'center',
    alignItems:'center',
    flex:2,
    borderWidth:1,
    borderRadius:5,
    height:50,
    margin:5,
    backgroundColor:"#65C3BA",
    borderColor: 'white'
  }
})
