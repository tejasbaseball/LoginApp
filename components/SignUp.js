import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BasicButton from './BasicButton';
import LoginSignUpBtn from './LoginSignUpBtn';
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import ORDivider from './ORDivider';
import SnackBar from './SnackBar';
export default class SignUp extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      ageGroup: '',
      password: '',
      confirmPassword: '',
      SnackBarText:'',
      SnackBarType:'',
      SnackBarVisible:false
    };
  }

  //function to handle when signup btn is clicked on
  handleRegisterBtnClick = () => {
    //validating fields using 3rd party library
    this.validate({
      name: { minlength: 3, maxlength: 25, required: true },
      email: { email: true, required: true },
      ageGroup: { required: true },
      password: { required: true },
      confirmPassword: { equalPassword: this.state.password, required: true },
    });
    if(this.getErrorMessages())
    {
      this.displaySnackBar("error",this.getErrorMessages());
    }
    else 
    {
      this.hideSnackBar();
      this.displaySnackBar("success","login successful");
    }
  };
  displaySnackBar=(type,text)=>{
    this.setState({"SnackBarType":type,"SnackBarText":text});
    this.setState({"SnackBarVisible":true});
  }
  hideSnackBar=()=>{
    this.setState({"SnackBarVisible":false});
  }

  //function to handle when sign in btn is clicked on
  handleSignInBtnClick() {
    console.log('sign in clicked');
  }

  //component rendering
  render() {
    return(
      <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="email-address"
            placeholder="Enter your registered email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />

          <View style={styles.divider}></View>
          <Text style={styles.label}>Age Group</Text>
          <Picker
                style={styles.inputField}
                selectedValue={this.state.ageGroup}
                onValueChange={(ageGroup, itemIndex) => this.setState({ ageGroup })}>
                <Picker.Item label="" value="" />
                <Picker.Item label="1-4" value="1-4" />
                <Picker.Item label="5-12" value="5-12" />
                <Picker.Item label="13-18" value="13-18" />
           </Picker>

           <View style={styles.divider}></View>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Enter password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
        </View>

        <BasicButton text="Register" onPress={this.handleRegisterBtnClick} />

        <Text style={styles.log}>{this.getErrorMessages()}</Text>
        <ORDivider/>
        <LoginSignUpBtn
          customStyle={styles.signin}
          text="Already have an account?"
          btnText="Sign in"
          onPress={this.handleSignInBtnClick}
        />
      </ScrollView>
      {
        this.state.snackBarVisible ?
            <SnackBar style={styles.snackBar}
                isVisible={this.state.SnackBarVisible}
                text={this.state.SnackBarText}
                type={this.state.SnackBarType}
                onClose={this.hideSnackBar}
            />
            : null
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
  },

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 8,
  },

  log: {
    textAlign: 'center',
    marginVertical: 2,
    color: 'red',
  },

  signin: {
    marginVertical: 40,
  },
  snackBar:{
    backgroundColor:"red"
  }
});
