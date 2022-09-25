// postReducer.js

import {ADD_POSTS} from '../constants';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: state.posts.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
