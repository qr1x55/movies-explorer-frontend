import './Profile.css';
import Header from '../Header/Header';
import ProfileForm from './ProfileForm/ProfileForm.jsx';



function ProfilePage({infoMessage}) {
  return (
    <>
      <Header loggedIn={true}/>
      <main className='profile'>
        <ProfileForm infoMessage={infoMessage}/>
      </main>
    </>
  );
};

export default ProfilePage;