import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setNewPostData } from '../../state/postCreation';

const NewPostForm = () => {
  const dispatch = useAppDispatch();
  const newPost = useAppSelector((state) => state.postCreation);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch an action to update the Redux state
    dispatch(setNewPostData({ ...newPost, [name]: value }));
  };

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="new-post-title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Post title
        </label>
        <input
          type="text"
          id="new-post-title"
          name="content.titleText"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="new-post-text-body"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Post body
        </label>
        <input
          type="text"
          id="new-post-text-body"
          name="content.bodyText"
          onChange={handleChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default NewPostForm;
