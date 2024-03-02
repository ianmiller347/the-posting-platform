import { User } from '../../types/user';
import { useGetUsersQuery } from '../../state/user';
import SkeletonLoaderBars from '../SkeletonLoaderBars';

const UsersList = () => {
  const { data: users, error, isLoading } = useGetUsersQuery('');

  return (
    <div className="users-list">
      {isLoading && <SkeletonLoaderBars />}
      <ul>
        {users?.map((user: User) => (
          <li
            key={user.id}
            className="border rounded-lg mb-4 p-4 dark-mode dark:bg-slate-800"
          >
            <article className="">
              <h3 className="text-xl font-medium dark:text-white">
                {user.displayName}
              </h3>
              <p className="dark:text-white">{user.content.description}</p>
            </article>
          </li>
        ))}
      </ul>
      {error && (
        <div className="error">Sorry, there was an error loading users.</div>
      )}
    </div>
  );
};

export default UsersList;
