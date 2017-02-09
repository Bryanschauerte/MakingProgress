import React, { Component } from 'react';
import TappableRow from '../presentation/native/TappableRow';
import {
  PixelRatio,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

class Landing extends Component{
  render(){
    console.log('landing props', this.props)
    return(
      <View style={styles.masterContainer}>
        <View style={styles.topContiner}>
          <Text>Top</Text>
          <TappableRow
            text="GOAAAAAALS"
            onPress={this.props.goToGoals}/>

        </View>
        <View style={styles.midContiner}>
          <Text>mid</Text>
          <TappableRow
            text="HOME"
            onPress={this.props.goToHome}/>
        </View>
        <View style={styles.btmContiner}>
          <Text>Bottom </Text>
          <TappableRow
            text="EDIT GIALS"
            onPress={this.props.goToNewAddition}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  masterContainer:{
    flex:1
  },
  topContiner:{
    flex:1,
    backgroundColor: 'powderblue'
  },
  midContiner:{
    flex:1,
    backgroundColor: 'skyblue'
  },
  btmContiner:{
    flex:1,
    backgroundColor: 'steelblue'
  }
})

export default Landing;
