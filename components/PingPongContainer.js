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
  Modal,
  Image
} from 'react-native';


import PingPongPlayer from './PingPongPlayer'


export default class PingPongContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      players:2,
      winner: 21,
      modalVisible: false

    }
  }
  static get defaultProps() {
    return {
      title: 'PingPongContainer',
      index: 1,
      id: 'PingPongContainer'
        };
      }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      onReset(){
        console.log('reset');

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
          <PingPongPlayer onReset={this.onReset} winScore={this.state.winner} key={i} playernumber={i}/>
        )}
        return playerBlocks;

      }


    render(){
      return(
        <View style={styles.container}>

          <View style={styles.topBar}>
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
              {/* <Text style={styles.button}>HOME</Text> */}
              <Image source={require('./public/home.png')} style={styles.logo} />
            </TouchableHighlight>
          </View>

          <ScrollView>
          {this._populatePlayers()}
          </ScrollView>

          <View style={{flexDirection:'row', alignItems:'center', marginBottom: 20}}>
            <Text style={styles.setWinnerText}>Set Winning Score: </Text>
            <TextInput style={styles.winningScore} onChangeText={this._handleNameChange.bind(this)} placeholder=" Default: 21"/>
          </View>

          <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
           <View style={{margin:10, padding:10, marginTop: 22, backgroundColor: "#009688"}}>
            <View>
              <ScrollView>
                <Text style={styles.rulesText}>A game is started when one player (server) makes a service before the receiver makes the return.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>The Server should:</Text>
                <Text style={styles.rulesText}> - start with the ball resting freely on an open palm.</Text>
                <Text style={styles.rulesText}> - project the ball near vertically upwards, without imparting spin, so that it rises at least 16cm.</Text>
                <Text style={styles.rulesText}> - strike the ball so that it touches first his/her court and then, after passing over the net assembly, touches directly the receiver's court. In doubles, the ball must touch successively the right half court of server and receiver.
                Once the ball has been served, both players are to make returns until a point is scored. In doubles, each player on the same team must take turns to make the return.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesText}>After 2 points have been scored, the receiving player/pair shall become the serving player/pair and so on until the end of the game.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>Scoring</Text>

                <Text style={styles.rulesText}>A set is when one of the players or pairs first score 11 points. In the event that both players/pairs score 10 points, a set is be won by the first player/pair to gain a 2-point lead. A full match is won when a player or pair wins the best of any odd number of sets (3,5,7).</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>A point is scored when:</Text>
                <Text style={styles.rulesText}>1. an opponent fails to make a correct service,
                2. an opponent fails to make a return,
                3. the ball touches any part of an opponent's body,
                4. an opponent strikes the ball twice in succession,
                5. if an opponent, or anything an opponent wears, touches the playing surface or net during play,
                6. if a doubles opponent strikes the ball out of the sequence established by the first server and first receiver.</Text>
              </ScrollView>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={[styles.button, {marginTop:10, color:'white', textAlign: 'center'}]}>BACK TO GAME</Text>
              </TouchableHighlight>
            </View>
           </View>
        </Modal>
        <TouchableHighlight style={{alignItems:'center', backgroundColor:"#25746c"}} onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={[styles.button, {textAlign:'center'}]}>
            RULES OF PING PONG
          </Text>
        </TouchableHighlight>
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
  rulesText: {
    color: 'white',
    fontFamily: 'Quicksand',
  },
  rulesTextBold: {
    color: 'white',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 3
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
  setWinnerText: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    fontSize:18
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
