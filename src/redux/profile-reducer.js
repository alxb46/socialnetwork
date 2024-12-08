const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:[
        {id:1, message: 'hi, how are you?', likesCount: 10},
        {id:2, message: 'its my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: null

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1, // automatically generate a new ID
                message: state.newPostText,
                likesCount: 0
            };

            // Create a new array with the added post, without mutating the original array
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, //keep the remaining fields unchanged
                newPostText: action.newText // update only newPostText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT ,
    newText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer;