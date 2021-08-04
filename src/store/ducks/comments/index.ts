import { Reducer } from 'redux';
import { ICommentState, CommentTypes, IComment } from './types';

const INITIAL_STATE: ICommentState = {
  data: [],
};

const reducer: Reducer<ICommentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentTypes.LOAD_REQUEST: {
      return { ...state };
    }
    case CommentTypes.LOAD_SUCCESS: {
      return { ...state, data: state.data.concat(action.payload.data) };
    }
    case CommentTypes.SAVE_REQUEST: {
      return { ...state, data: state.data.concat([action.payload]) };
    }
    case CommentTypes.EDIT_REQUEST: {
      console.log('edilson edit request');
      return {
        ...state,
        data: state.data.map((comment: IComment) => {
          if (comment.id === action.payload) {
            return {
              ...comment,
              onEdition: !comment.onEdition,
            };
          }
          return comment;
        }),
      };
    }
    case CommentTypes.EDIT_SUCCESS: {
      return {
        ...state,
        data: state.data.map((comment: IComment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              onEdition: false,
              body: action.payload.description,
            };
          }
          return comment;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
