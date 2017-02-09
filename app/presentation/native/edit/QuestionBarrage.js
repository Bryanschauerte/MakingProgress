import React, { Component } from 'react';
import TappableRow from '../TappableRow';
import ButtonFeedBack from '../ButtonFeedBack';
import {
  PixelRatio,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

class QuestionBarrage extends Component{
  render(){
    return(
      <View style={styles.masterContainer}>
        <View style={this.props.question.detail.show?styles.questionBoxShow: styles.questionBoxHide}>
          <Text style={styles.titleText}>
            {this.props.question.detail.show?
              this.props.question.detail.question:
              this.props.question.question
            }
          </Text>
        </View>
          {
            this.props.question.inputOptions.length>0?
              this.props.question.inputOptions.map((item, index)=>{
                return (
                  <View
                    style ={styles.btnContiner}
                    key={item.label + index}>
                    {
                      item.label?
                        <ButtonFeedBack
                          action={
                            this.props.addValuePair.bind(
                              null,
                              this.props.question.inputProp,
                              item.value)
                          }
                          title={item.label}
                          color='red'
                          accessibilityLabel={item.label}/>
                          : null}
                    </View>)
                }):null}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  masterContainer:{
    flex:1,
    justifyContent:'center'
  },
  topContiner:{
    flex:1,
    backgroundColor: 'powderblue'
  },
  btmContiner:{
    flex:1,
    height:50,
    backgroundColor: 'steelblue'
  },
  btnContiner:{
    flex:1,
    backgroundColor: 'steelblue'
  },
  titleText: {
    fontSize: 17,
    padding: 25,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  textSeperator: {
    fontSize: 20
  },
  countText:{
    fontSize:15
  },
  questionBoxShow:{
    height:100,
    flex:1
  },
  questionBoxhide:{
    height:30,
    flex:1
  }
})

export default QuestionBarrage;
