import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../Helper/BackButton';
import axios from 'axios';
import {useDispatch} from 'react-redux';

const CreatePost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const count = 9;

  async function createPost(title, description, count) {
    await axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        id: count,
        title: title,
        userId: 1,
        description: description,
      })
      .then(function (response) {
        if (response) {
          alert('successfully added a post');
          dispatch({
            type: 'ADD_POSTS',
            payload: {
              id: count,
              title: title,
              userId: 1,
              description: description,
            },
          });
          navigation.navigate('main');
        } else {
          alert('could not add a post, try again');
        }
      })
      .catch(function (error) {
        alert(error);
      });
    count++;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.goBack()} />

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 30}}>Title</Text>

        <TextInput
          style={styles.input}
          placeholder="enter title"
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 30}}>Description</Text>
        <TextInput
          style={styles.input2}
          placeholder="enter description"
          onChangeText={text => setDescription(text)}
          value={description}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => createPost(title, description, count)}
        title="CREATE">
        <Text style={styles.buttonTextStyles}>CREATE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  card: {
    padding: 10,
    backgroundColor: 'grey',
    shadowColor: 'black',
    shadowOpacity: 4,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderRadius: 20,
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  input2: {
    height: 140,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonStyles: {
    height: 44,
    borderRadius: 23,
    width: 200,
    backgroundColor: '#185FA5',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyles: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
