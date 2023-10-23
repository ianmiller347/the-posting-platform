import { useAppDispatch } from '../../hooks/redux';
import { showModal } from '../../state/postCreationModal';
import NewPostModal from './NewPostModal';

const NewPostButton = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="button text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="button"
        data-modal-target="new-post-modal"
        data-modal-toggle="new-post-modal"
        onClick={() => dispatch(showModal())}
      >
        Create Post
      </button>
      <NewPostModal />
    </>
  );
};

export default NewPostButton;
