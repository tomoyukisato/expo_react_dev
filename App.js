
import React from 'react';
import { StyleSheet, Button, Text, View,AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import TestScreen from './components/TestScreen';
// import SaveDataScreen from './components/SaveDataScreen';
import InvoiceEditScreen from './components/InvoiceEditScreen';
import SummaryScreen from './components/SummaryScreen';
import FormScreen from './components/FormScreen';
import ContactScreen from './components/ContactScreen';

import * as Font from "expo-font";
// import { Ionicons } from "@expo/vecton-icons";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
    Contact: ContactScreen,
    Form: FormScreen,
    InvoiceEdit:InvoiceEditScreen,
    Summary: SummaryScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReady : false
    };
  }
  // async componentDidMount(){
  //   await Font.loadAsync({
  //     Roboto: require(),
  //     Roboto_medium : require(),
  //     ...Ionicons.font
  //   });
  //   this.setState({isReady:true});
  // }
  render() {
    return <AppContainer />;
  }
}