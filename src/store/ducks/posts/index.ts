import { Reducer } from 'redux';
import { IPostState, PostTypes, IPost } from './types';

const INITIAL_STATE: IPostState = {
  data: [],
  loading: false,
};

const reducer: Reducer<IPostState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypes.LOAD_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case PostTypes.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false,
      };
    }
    case PostTypes.LOAD_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case PostTypes.SAVE_REQUEST: {
      return { ...state, data: state.data.concat([action.payload]) };
    }
    case PostTypes.DELETE_REQUEST: {
      return {
        ...state,
        loading: false,
        data: state.data.filter((post: IPost) => post.id !== +action.payload),
      };
    }
    case PostTypes.DELETE_SUCCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case PostTypes.EDIT_REQUEST: {
      return {
        ...state,
        data: state.data.map((post: IPost) => {
          if (post.id === action.payload) {
            return {
              ...post,
              onEdition: !post.onEdition,
            };
          }
          return post;
        }),
      };
    }
    case PostTypes.EDIT_SUCCESS: {
      return {
        ...state,
        data: state.data.map((post: IPost) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              onEdition: false,
              body: action.payload.description,
            };
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
