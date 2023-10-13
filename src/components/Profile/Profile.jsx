import './Profile.css';
import Header from '../Header/Header';
import ProfileForm from './ProfileForm/ProfileForm.jsx';



function ProfilePage({ onEdit, onSignOut, isSuccess, setIsSuccess}) {
  return (
    <>
      <Header loggedIn={true}/>
      <main className='profile'>
        <ProfileForm  onSignOut={onSignOut} setIsSuccess={setIsSuccess} isSuccess={isSuccess} onEdit={onEdit}/>
      </main>
    </>
  );
};

export default ProfilePage;