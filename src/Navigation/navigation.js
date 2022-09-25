import React, {Component} from 'react';
import {text, Button, TouchableOpacity, Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AccountInfo from '../Screens/accountInfo';
import Main from '../Screens/main';
import Preview from '../Screens/preview';
import Login from '../Screens/login';
import CreatePost from '../Screens/createPost';
import {useNavigation} from '@react-navigation/native';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="main"
          component={Main}
          options={({navigation, route}) => ({
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('createPost')}>
                <Text>ADD</Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('accountInfo')}>
                <Image
                  source={require('../assets/default_profile.webp')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createPost"
          component={CreatePost}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="preview"
          component={Preview}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="accountInfo"
          component={AccountInfo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
