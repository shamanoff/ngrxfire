import * as PostActions from './actions';
import {Post} from './post';

export type Action = PostActions.All;
const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0
};
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {

}
