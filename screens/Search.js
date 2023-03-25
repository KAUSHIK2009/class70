import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Search Screen
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color:'white',
        fontSize:30,
    }
  });