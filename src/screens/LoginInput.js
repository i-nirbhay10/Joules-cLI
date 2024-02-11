import React, { useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native'
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions'
import TextInput from '../components/Inputbox'
import InputBoxTwo from '../components/InputBoxTwo'

import { Checkbox } from 'react-native-paper'
import { signItUp } from '../Redux/Action'
import { useDispatch } from 'react-redux'
import Toast, { BaseToast } from 'react-native-toast-message'

const LoginInput = ({ navigation }) => {
  const [userData,setuserData]=useState({Email:"",Password:""})
  const [rememberMe, setRememberMe] = useState(true);
  const dispatch=useDispatch()

  const login=()=>{
    const allValuesPresent  = Object.keys(userData).every(key => userData[key] !== "");
    if(!allValuesPresent ){
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Login Error',
        text2: 'please input all field',
        visibilityTime: 4000,
        text1Style:{color:"red",fontSize:14},
        autoHide: true,
        bottomOffset: 40,
        swipeable:true
      }); 
    }
    const generalEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const hasNumber = /\d/.test(userData.Email);
    // const isValid = generalEmailRegex.test(userData.Email) && userData.Email.toLowerCase().includes('@gmail.com') && hasNumber;
    const isValid = generalEmailRegex.test(userData.Email) && userData.Email.toLowerCase().includes('@gmail.com');
    if(!isValid){
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Login Error',
        text2: 'email is invalid',
        visibilityTime: 4000,
        text1Style:{color:"red",fontSize:14},
        autoHide: true,
        bottomOffset: 40,
        swipeable:true
      });
    }
    if(isValid && allValuesPresent){
    try {
      const response=dispatch(signItUp(userData,navigation))
    } catch (error) {
      console.error("error in login user",error)
    }
  }
  else{
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Login Error',
      text2: 'Please input all field',
      visibilityTime: 4000,
      text1Style:{color:"red",fontSize:14},
      autoHide: true,
      bottomOffset: 40,
      swipeable:true
    });
    };
  

  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* <Input style={styles.inputone} />  */}
        <View style={styles.inputsContainer}>
          <View>
            <InputBoxTwo label="Email" placeholder="Enter your mail id"  value={userData.Email} setValue={setuserData} objectData={userData}/>
          </View>
          <View>
            <InputBoxTwo label="Password" placeholder="Enter your password" value={userData.Password} setValue={setuserData} objectData={userData}/>
          </View>
        </View>
        <View style={styles.forgotRememberContainer}>
          <TouchableOpacity
          //   onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.checkboxContainer}>
            <Checkbox.Android
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
              // uncheckedColor={theme.colors.primary}
              // color={theme.colors.primary}
              style={styles.checkbox}
            />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.SignupButton}
          onPress={login}
        >
          <Text style={styles.SignupButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.ortext}>or</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialIconWrapper}>
              <Image
                source={require('../assets/googlelogo.png')}
                // style={styles.socialIconText}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialIconWrapper}>
              <Image
                source={require('../assets/facebookvector.png')}
                // style={styles.socialIconText}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialIconWrapper}>
              <Image
                source={require('../assets/apple.png')}
                // style={styles.socialIconText}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // Adjust container styles if needed
  },
  inputone: {
    borderWidth: 2,
    borderRadius: 8,
    height: 40,
    backgroundColor: '#fff',
  },
  inputsContainer: {
    // marginVertical: 8,
  },
  input: {
    borderRadius: 8,
    height: 40,
    backgroundColor: '#fff',
  },
  forgotRememberContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 10,
  },
  forgot: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'green',
    color:"#118615",
    padding: 2,
  },
  SignupButton: {
    // backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: 'green',
  },
  SignupButtonText: {
    fontSize: fp(2.6),
    color: 'green',
  },
  ortext: {
    padding: 15,
    fontSize: fp(3),
    textAlign: 'center',
    color: '#8B8B8B',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
  },
  socialButton: {
    padding: 8,
    marginHorizontal: 8,
    // borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#fff',
  },
  socialIconWrapper: {
    // padding: 5,
  },
  rememberMeText:{
    color:"black"
  }
})

export default LoginInput