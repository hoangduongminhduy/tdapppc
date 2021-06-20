import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';


function checkSignup(){

}

function Signup({navigation}) {
  const [sex, setSex] = useState("Giới tính");


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.logo}>TDVN</Text>
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView>

          <TextInput placeholder="Tên đăng nhập" style={styles.textInput}></TextInput>
          <TextInput placeholder="Mật khẩu" secureTextEntry={true} style={styles.textInput}></TextInput>
          <TextInput placeholder="Nhập lại mật khẩu" secureTextEntry={true} style={styles.textInput}></TextInput>
          <TextInput placeholder="Họ tên/ Tên doanh nghiệp" style={styles.textInput}></TextInput>


        </ScrollView>
      </KeyboardAvoidingView>
      
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:30, alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{color:'#f1681f', textDecorationLine:'underline'}}>Đã có tài khoản?</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => checkSignup()} style={styles.signupBtn}><Text style={{color:'white', fontWeight:'bold'}}>ĐĂNG KÝ</Text></TouchableOpacity>
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
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    marginBottom:50
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
    marginTop:580,
    alignSelf:'center', 
 },

  textInput: {
    marginTop: 7,
    marginLeft:25,
    marginRight:15,
    paddingLeft:10,
    height:40,
    borderBottomWidth:2,
    borderBottomColor:'#bfbfbd',
    color:'#666666',
  },

  textInputRow: {
    marginTop: 7,
    marginLeft:25,
    marginRight:15,
    paddingLeft:10,
    height:40,
    width:120,
    borderBottomWidth:2,
    borderBottomColor:'#bfbfbd',
    color:'#666666',
  },

  signupBtn:{
    width:150,
    backgroundColor:"#4dc274",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    
  },


});

export default Signup;