import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

import CountDown from './Countdown'
import GenericPlayer from './GenericPlayer'


export default class GenericContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      players:1,
      total: 0,
      winner: 0
    }
  }
    static get defaultProps() {
      return {
        title: 'GenericContainer',
        index: 1,
        id: 'GenericContainer'
          };
        }

        _handleNameChange(winner) {
          this.setState({winner})
        }

      onButtonPress(){
        this.props.navigator.pop({
          id: 'Game'
        })
      }

      _populatePlayers() {
      var playerBlocks = [];
      for(var i=1;i<=this.state.players;i++){
        playerBlocks.push(
          <GenericPlayer winScore={this.state.winner} key={i} playernumber={i}/>
        );

      }
        return playerBlocks;

    }

    render(){
      return(
        <View  style={styles.container}>
          <View style={styles.topBar}>
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
              {/* <Text style={styles.button}>HOME</Text> */}
              <Image source={require('./public/home.png')} style={styles.logo} />
            </TouchableHighlight>
          </View>
          <Slider
              maximumValue={6}
              minimumValue={1}
              step={1}
              value={this.state.players}
              onValueChange={players => this.setState({players})}
            />
            <View style={styles.button}>
              <Text style={[styles.button, {textAlign:'center'}]}>NUMBER OF PLAYERS: {this.state.players}</Text>
            </View>
              <ScrollView>
              {this._populatePlayers()}
              </ScrollView>
                <CountDown />
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={styles.setWinnerText}>Set Winning Score: </Text>
                  <TextInput style={styles.winningScore} onChangeText={this._handleNameChange.bind(this)}/>
                </View>

        </View>


      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop:20,
    padding: 10,
    backgroundColor: '#009688',
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
  button: {
    fontFamily: "Quicksand",
    color: 'white',
    backgroundColor: "#25746c",
    padding: 2,
    borderRadius: 8,
    borderWidth:1,
    borderColor: "#25746c",
    textAlign: 'center'
  },
  setWinnerText: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    fontSize:18,
    borderRadius: 2
  },
  winningScore: {
    width: 100,
    height: 35,
    borderColor: 'white',
    borderWidth:1,
    margin:10,
    fontFamily:"Quicksand-Bold",
    color:'white',
    backgroundColor: '#54B2A9'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    justifyContent: 'flex-start',
    height: 24,
    width: 24
  }
});
