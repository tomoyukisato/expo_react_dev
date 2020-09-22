import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import styles from '../styles.js';
import { Card, Button, Input} from 'react-native-elements';


class TestScreen extends React.Component {
    state ={
        text1:"placeholder"
    }
    render() {
        return (
          <View style={{flex:1, paddingVertical:80}}>
            <Card title="入力してね">
              <Input
                value={this.state.text1}
                label="text1"
                errorMessage="error"
                onChangeText={(t)=>{this.setState({text1:t})}}
              />
              <Button
                title="Entry"
                buttonStyle={{marginTop:30}}
                borderRadius={20}
                onPress={this.entry}
              />
            </Card>
          </View>
        );
      }
      //アラート表示
      entry = () => {
        alert(this.state.text1);
      }

}

export default TestScreen