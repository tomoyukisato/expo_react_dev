import React from "react";
import * as PropTypes from "prop-types";
import { TextInput } from "react-native";
import colors from "../contants/colors";
import FormFeild from "./FormFeild";

const style= {
    width : "100%",
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    fontSize: 16,
};

function Input(props){
    const {placeholder, value, setFeildValue, setFeildTouched} = props;
    return (
        <TextInput
            style={style}
            placeholder={placeholder}
            autoCapitalize ="none"
            onChangeText={setFeildValue}
            onBlur={()=> setFeildTouched(true)}
            value= {value}
            />
    );
}

Input.defaultProps={
    placeholder : "";
    value: ""
};

Input.propTypes ={
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setFeildValue: PropTypes.func.isRequired,
    setFeildTouched: PropTypes.func.isRequired
}
export detault FormFeild(Input);