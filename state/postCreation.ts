import { createSlice } from '@reduxjs/toolkit';
import { PostData } from '../types/post';

const emptyPostObject: PostData = {
  id: '',
  displayName: '',
  uri: '',
  content: {
    titleText: '',
    bodyText: '',
    imageUrl: '',
    imageCaption: '',
    videoUrl: '',
    bodyRichContent: '',
  },
};

const postCreationSlice = createSlice({
  name: 'postCreation',
  initialState: emptyPostObject,
  reducers: {
    setNewPostData: (state, action) => {
      state.displayName = action.payload.displayName;
      state.content = action.payload.content;
    },
    resetNewPostData: (state) => {
      state = emptyPostObject;
    },
  },
});

export const { setNewPostData, resetNewPostData } = postCreationSlice.actions;
export default postCreationSlice.reducer;
