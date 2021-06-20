import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


function Signup({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.logo}>TDVN</Text>
         </View>
        </View>

        
        

      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerContainer: {
    flex: 0.2,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  header: {
    backgroundColor:'#003f5c', 
    borderRadius: 700,
    width: 700,
    height: 700,
    marginLeft: -170,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:1,
    marginTop:600,
    alignSelf:'center', 
  }
});

export default Signup;