import Page from '../../components/Page';
import UsersList from '../../components/UsersList';

export default function Users() {
  return (
    <Page title="Users" description="Users on the Posting Platform">
      <>
        <p className="mb-8">
          Check out some of the users who are all from here
        </p>
        <UsersList />
      </>
    </Page>
  );
}
