import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator,
  ScrollView,
  Modal,
  Image
} from 'react-native';


import CountDown from './Countdown'

import SpadesPlayer from './SpadesPlayer'


export default class SpadesContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      modalVisible: false,
      winner: 500
    }
  }
    static get defaultProps() {
      return {
        title: 'SpadesContainer',
        index: 1,
        id: 'SpadesContainer'
          };
        }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      onButtonPress(){
        this.props.navigator.pop({
          id: 'Game'
        })
      }

      _handleWinScore(winner) {
      this.setState({winner})
    }

      _populatePlayers() {
      var playerBlocks = [];
      for(var i=1;i<=2;i++){
        playerBlocks.push(
          <SpadesPlayer winScore={this.state.winner} key={i} playernumber={i}/>
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

          <ScrollView>
          {this._populatePlayers()}
          </ScrollView>

          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.setWinnerText}>Set Winning Score: </Text>
            <TextInput style={styles.winningScore} onChangeText={this._handleWinScore.bind(this)} placeholder=" 500"/>
          </View>

            <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{padding: 10, margin:10, marginTop: 22, backgroundColor: "#009688"}}>
            <View>
              <ScrollView>
                <Text style={styles.rulesTextBold}>Rank of Suits</Text>
                <Text style={styles.rulesText}>The spade suit is always trump.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>Rank of Cards</Text>
                <Text style={styles.rulesText}>A (high), K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>Object of the Game</Text>
                <Text style={styles.rulesText}>To win at least the number of tricks bid.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>The Deal</Text>
                <Text style={styles.rulesText}>The first dealer is chosen by a draw for high card, and thereafter the turn to deal proceeds clockwise. The entire deck is dealt one at a time, face down, beginning on the dealer's left. The players then pick up their cards and arrange them by suits.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>The Bidding</Text>
                <Text style={styles.rulesText}>Each player decides how many tricks he will be able to take. The player to the dealer's left starts the bidding and, in turn, each player states how many tricks he expects to win. There is only one round of bidding, and the minimum bid is One. Every player must make a bid; no player may pass. No suit is named in the bid, for as the name of the game implies, spades are always trump.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>The Play</Text>
                <Text style={styles.rulesText}>The game is scored by hands, and the winner must make a certain number of points, which is decided before the game begins. Five hundred points is common, but 200 points is suitable for a short game. The player on the dealer's left makes the opening lead, and players must follow suit, if possible. If a player cannot follow suit, he may play a trump or discard. The trick is won by the player who plays the highest trump or if no trump was played, the player who played the highest card in the suit led. The player who wins the trick leads next. Play continues until none of the players have any cards left. Each hand is worth 13 tricks. Spades cannot be led unless played previously or player to lead has nothing but Spades in his hand.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesTextBold}>How to Keep Score</Text>
                <Text style={styles.rulesText}>For making the contract (the number of tricks bid), the player scores 10 points for each trick bid, plus 1 point for each overtrick.</Text>
                <Text style={styles.rulesText}>{' '}</Text>
                <Text style={styles.rulesText}>For example, if the player's bid is Seven and he makes seven tricks, the score would be 70. If the bid was Five and the player won eight tricks, the score would be 53 points: 50 points for the bid, and 3 points for the three overtricks. In some games, overtricks are called "bags" and a deduction of 100 points is made every time a player accumulates 10 bags. Thus, the object is always to fulfill the bid exactly.
                <Text style={styles.rulesText}>{' '}</Text>
                If the player "breaks contract," that is, if he takes fewer than the number of tricks bid, the score is 0. For example, if a player bids Four and wins only three tricks, no points are awarded.
                One of the players is the scorer and writes the bids down, so that during the play and for the scoring afterward, this information will be available to all the players. When a hand is over, the scores should be recorded next to the bids, and a running score should be kept so that players can readily see each other's total points. If there is a tie, then all players participate in one more round of play.
                </Text>
              </ScrollView>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={[styles.button, {color:'white', textAlign: 'center'}]}>BACK TO GAME</Text>
              </TouchableHighlight>
            </View>
           </View>
          </Modal>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
            }}>
            <Text style={[styles.button, {textAlign:'center'}]}>RULES OF SPADES</Text>
          </TouchableHighlight>
        </View>


      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    margin: 10,
    marginTop: 20,
    backgroundColor: '#009688',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    fontSize:18,
    borderRadius: 2
  },
  logo: {
    justifyContent: 'flex-start',
    height: 24,
    width: 24
  },
});
