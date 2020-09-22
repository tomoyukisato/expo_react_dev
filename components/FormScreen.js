import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import styles from '../styles.js';
import { Card, Button } from 'react-native-elements';
import { Formik } from "formik";
import Input from "./Input";

import * as Yup from "yup";
import { TextInput } from 'react-native-gesture-handler';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "3文字以上で入力してください。")
    .max(20, "20文字以内で入力してください")
    .required("氏名を入力してください")
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%"
  }
});

class FormScreen extends React.Component {
  onSubmit = async (values, actions) => {

  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.form}>
          <Formik
            initialValues={{
              name: ""
            }}
            validateOnMount
            validationSchema={schema}
            onSubmit={this.onSubmit}
          >
            {({ handleSubmit, handleChange, handleBlur, isValid, isSubmitting, values, errors, touched }) => (
              <>
                <View>
                  {errors.name && touched.name ? <Text>{errors.name}</Text> : null}
                  <Input
                    label="氏名"
                    name="name"
                    placeholder="氏名を入力してください"
                  />

                </View>
                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                ></Button>
              </>
            )}
          </Formik>
        </View>

      </ScrollView>
    );
  }
  //アラート表示
  entry = () => {
    alert(this.state.text1);
  }

}

export default FormScreen