import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import FlatButton from '../shared/button';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required').min(4),
  body: Yup.string().required('Body is required').min(8),
  rating: Yup.number().required('Rating is required').test('is-num-1-5','Rating must be a number 1-5',(val)=>{
    return parseInt(val)<6 && parseInt(val)>0;
  }),
});

const ReviewForm = ({addReview}) => {

  return (
    <Formik
      initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={validationSchema}
      onSubmit={(values,actions)=>{
        addReview(values);
        actions.resetForm();
    }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.field}>
            <Text style={styles.label}>Game Name</Text>
            <TextInput
              multiline minHeight={40}
              style={styles.input}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              placeholder="Enter game title..."
            />
            {errors.title && touched.title ? (
              <Text style={styles.error}>{errors.title}</Text>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Game Description</Text>
            <TextInput
              multiline minHeight={60}
              style={styles.input}
              onChangeText={handleChange('body')}
              onBlur={handleBlur('body')}
              value={values.body}
              placeholder="Enter review body..."
            />
            {errors.body && touched.body ? (
              <Text style={styles.error}>{errors.body}</Text>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Game Rating</Text>
            <TextInput
              multiline minHeight={40}
              style={styles.input}
              onChangeText={handleChange('rating')}
              onBlur={handleBlur('rating')}
              value={values.rating}
              placeholder="Enter rating (1-5)..."
              keyboardType="numeric"
            />
            {errors.rating && touched.rating ? (
              <Text style={styles.error}>{errors.rating}</Text>
            ) : null}
          </View>

          <FlatButton title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default ReviewForm;
