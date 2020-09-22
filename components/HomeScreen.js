import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import styles from '../styles.js';
import { Card, Button, Input} from 'react-native-elements';


class HomeScreen extends React.Component {
    state ={
        name:"hoge",
        age: 3,
        text1:"placeholder"
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Hello World!</Text>
        <Text>こんにちは{this.state.name}</Text>
                <Button
                    title="Go to InvoiceEdit"
                    onPress={() => this.props.navigation.navigate('InvoiceEdit')}
                />
                <Button
                    title="Go to Summary"
                    onPress={() => this.props.navigation.navigate('Test')}
                />
                <Button
                    title="Go to Test"
                    onPress={() => this.props.navigation.navigate('Test')}
                />
                <Button
                    title="Go to Form"
                    onPress={() => this.props.navigation.navigate('Form')}
                />
                <Button
                    title="click"
                    onPress={this.showAlert}
                />
                <Button
                    title="change name"
                    onPress={this.changeName}
                />
                <Button
                    title="Contact"
                    onPress={() => this.props.navigation.navigate('Contact')}
                />
                <Hello to="Bob"/>
                <Hello to="Tom"/>
                <Text>入力してください</Text>
                <TextInput
                    value={this.state.test1}
                    onChangeText = {(t) => this.setState({text1:t})}
                />
                <Button
                    title="Entity"
                    onPress= {this.entry}
                />
            </View>
        );

        function Hello(props){
            return (
            <Text>Hello. {props.to}!</Text>
            );
        }
    }
    entry =()=>{
        alert(this.state.text1)
    }
    showAlert = () => {
        alert("show alert");
    }
    changeName = () =>{
        this.setState({
            name : "Foo"
        })
    }

}

export default HomeScreen