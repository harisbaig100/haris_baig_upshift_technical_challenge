import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Preview from './preview';
import axios from 'axios';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

const Main = ({navigation}) => {
  const [allPosts, setAllPosts] = useState([]);
  const posts = useSelector(state => state);

  useEffect(() => {
    if (!posts.posts.posts.length) {
      getPost();
    }
  }, []);

  async function getPost() {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts', {})
      .then(function (response) {
        setAllPosts(response.data.slice(0, 8));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function renderPosts() {
    const postsToRender = !posts.posts.posts.length
      ? allPosts
      : posts.posts.posts;
    return (
      <View style={styles.view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {postsToRender.map(post => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`post-${post.value ? post.value.id : post.id}`}
              onPress={() => navigation.navigate('preview', {post})}>
              {renderPost(post.value ? post.value : post)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  function renderPost(post) {
    return (
      <View style={styles.card}>
        <Text style={styles.titleStyles}>{post.title}</Text>
        <Text style={{fontSize: 13}}>{post.description}</Text>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>{renderPosts()}</SafeAreaView>;
};

const mapStateToProps = function (state) {
  return {
    posts: state.allPosts,
  };
};

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    backgroundColor: '#D3D3D3',
    shadowColor: 'grey',
    shadowOpacity: 4,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    height: 250,
  },
  titleStyles: {
    fontSize: 20,
    marginBottom: 20,
    padding: 5,
  },
});
