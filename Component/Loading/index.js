import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import {StackActions} from '@react-navigation/native';


const Spinner = require('react-native-spinkit');
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            index: 0,
            types: ['CircleFlip', 
            'Bounce', 
            'Wave', 
            'WanderingCubes', 
            'Pulse', 
            'ChasingDots', 
            'ThreeBounce', 
            'Circle', 
            '9CubeGrid', 
            'WordPress', 
            'FadingCircle', 
            'FadingCircleAlt',
            'Arc', 
            'ArcAlt'],
            size: 100,
            color: "coral",
            isVisible: true
         }
    }

    componentDidMount() {  
        setTimeout (() => {
            this.props.navigation.dispatch(StackActions.replace('UploadImage'))
        }, 3000)
    }

    render() { 
        return ( 
            <View style = {styles.container} >
                <Spinner style={styles.spinner} 
                isVisible={this.state.isVisible} 
                size={this.state.size} 
                type={'Bounce'} 
                color={this.state.color}/>  

                <Text>Loading...</Text>
            </View>
         );
    }
}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  
    spinner: {
      marginBottom: 50
    },
  
    btn: {
      marginTop: 20
    },
  
    text: {
      color: "white"
    }
  });
export default Loading;