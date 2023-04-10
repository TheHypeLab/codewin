import SignIn from '../components/SignIn';
import Chat from '../components/Chat';
import useUser from '../hooks/useUser';

function Home() {
  const { user } = useUser();

  return (
    <div>
      {!user ? <SignIn /> : <Chat user={user} />}
    </div>
  );
}

export default Home;