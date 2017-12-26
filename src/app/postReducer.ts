import * as PostActions from './postActions';
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

  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});

    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});


    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});

    case PostActions.RESET:
      return defaultState;

    default:
      return state;
  }

}
