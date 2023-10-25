import { createSlice } from '@reduxjs/toolkit';

const postCreationModalSlice = createSlice({
  name: 'postCreationModal',
  initialState: false,
  reducers: {
    showModal: () => true,
    hideModal: () => false,
  },
});

export const { showModal, hideModal } = postCreationModalSlice.actions;
export default postCreationModalSlice.reducer;
