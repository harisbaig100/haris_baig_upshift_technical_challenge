import {POSTS} from '../constants';

export const addPost = post => {
  return {
    type: POSTS,
    payload: post,
  };
};
