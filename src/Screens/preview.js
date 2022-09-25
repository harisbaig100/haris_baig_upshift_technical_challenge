import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BackButton from '../Helper/BackButton';
import axios from 'axios';

const Preview = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const post = route.params.post;

  async function updatePost(title, description) {
    await axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${
          post.value ? post.value.id : post.id
        }`,
        {
          title: title,
          userId: 1,
          description: description,
        },
      )
      .then(function (response) {
        if (response) {
          alert('successfully updated a post');
          navigation.navigate('main');
        } else {
          alert('could not update a post, try again');
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }

  async function deletePost(title, description) {
    await axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${
          post.value ? post.value.id : post.id
        }`,
      )
      .then(function (response) {
        if (response) {
          alert('successfully deleted a post');
          navigation.navigate('main');
        } else {
          alert('could not update a post, try again');
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton goBack={() => navigation.goBack()} />

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 30}}>Title</Text>

        <TextInput
          style={styles.input}
          placeholder={post.value ? post.value.title : post.title}
          onChangeText={text => setTitle(text)}
          value={title}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 30}}>Description</Text>
        <TextInput
          style={[styles.input, {height: 120}]}
          multiline={true}
          placeholder={post.value ? post.value.description : post.body}
          onChangeText={text => setDescription(text)}
          value={description}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => updatePost(title, description)}
        title="Update">
        <Text style={styles.buttonTextStyles}>UPDATE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => deletePost()}
        title="Update">
        <Text style={styles.buttonTextStyles}>DELETE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Preview;

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
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 2,
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
