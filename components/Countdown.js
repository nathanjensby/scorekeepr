/**
 * Created by guguyanhua on 12/11/15.
 */
import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
var TimerMixin = require('react-timer-mixin');

var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.time ? this.props.time : 60,
      disabled: false
    };
  },
  // componentDidMount(){
  //   this._countdown();
  // },
  render(){
    var style = [styles.text];
    var component;
    if (this.state.disabled) {
      style.push({color: 'gray'});
      style.push(this.props.disabledTextStyle);
      component =
          <View>
                <TouchableHighlight
                    style={[styles.wrapper,this.props.buttonStyle]}
                    onPress={this._resetTimer}
                    >
                      <Text>Reset</Text>
                </TouchableHighlight>
            <TouchableHighlight
                >
              <Text style={[style]}>{this.props.text}({this.state.time})</Text>
            </TouchableHighlight>
          </View>
    } else {
      component =
        <View>
          <TouchableHighlight
              style={[styles.wrapper,this.props.buttonStyle]}
              onPress={this._onPress}
              >
                <Text>Start</Text>
          </TouchableHighlight>
          <Text style={[style,this.props.textStyle]}>{this.props.text}({this.state.time})</Text>
        </View>
    }
    return (
        component
    )
  },
  _onPress(){
    if (this.state.disabled) {
      //nothing
    } else {
      this.setState({disabled: true});
      this._countdown();
      if(this.props.onPress){
          this.props.onPress();
      }
    }
  },

  _resetTimer(){
    this.setState({
      disabled: false,
      time: 0
    })

  },

  _countdown(){
    var timer = function () {
      var time = this.state.time - 1;
      this.setState({time: time});
      if (time > 0) {
        this.setTimeout(timer, 1000);
      } else {
        this.setState({disabled: false});
        this.setState({time: this.props.time ? this.props.time : 60});
      }
    };
    this.setTimeout(timer, 1000);
  }
});

var styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  wrapper: {
    padding: 10,
    marginRight:10,
    backgroundColor: '#e5e5e5',
  }
});

module.exports = CountDown;
