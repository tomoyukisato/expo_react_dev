import React from "react";
import * as PropTypes from "prop-types";
import {View, Text , StyleSheet} from "react-native";
import {withFormikControl } from "react-native-formik";
import colors from "../constants/colors";


const styles = StyleSheet.create({
    container :{
        width :"100%",
        marginVertical:12,
        paddingBotto: 24,
    },
    label:{
        fontSize: 16,
        marginBotton:10
    },
    error:{
        position: "absolute",
        color:colors.red,
        fontSize: 12,
        bottom:0
    }
});

funtion FormField(WrappedComponent){
    return withFormikControl(function(){
        const { label, error, touched} = props;
        return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <WrappedComponent {...props}/>
        {error && toutched ? <Text style={styles.error}>{error}</Text>: null }
            </View>
        );
    });

}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PrppTypes.string.isRequired
}

export default FormField;
