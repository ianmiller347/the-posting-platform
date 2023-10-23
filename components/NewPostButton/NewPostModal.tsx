import { useAppSelector } from '../../hooks/redux';
import { useCreatePostMutation } from '../../state/post';
import NewPostForm from './NewPostForm';

const MODAL_ID = 'new-post-modal';

const NewPostModal = () => {
  const [createPost] = useCreatePostMutation();
  const newPost = useAppSelector((state) => state.postCreation);
  const modalIsVisible = useAppSelector((state) => state.postCreationModal);

  const handleSubmit = () => {
    createPost(newPost);
  };

  const modalClassNames = [
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'z-50',
    !modalIsVisible ? 'hidden' : '',
    'w-full',
    'p-4',
    'overflow-x-hidden',
    'overflow-y-auto',
    'md:inset-0',
    'h-[calc(100%-1rem)]',
    'max-h-full',
  ].join(' ');

  return (
    <div
      id={MODAL_ID}
      tabIndex={-1}
      aria-hidden={!modalIsVisible}
      className={modalClassNames}
    >
      <div className="modal-content relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Create a post
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide={MODAL_ID}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <NewPostForm />
        </div>
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            data-modal-hide={MODAL_ID}
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            data-modal-hide={MODAL_ID}
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
