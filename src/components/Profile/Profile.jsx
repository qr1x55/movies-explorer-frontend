import './Profile.css';
import Navigation from '../Navigation/Navigation';
import ProfileForm from './ProfileForm/ProfleForm.jsx';



function ProfilePage({infoMessage}) {
  return (
    <section className='profile__page'>
      <div className='profile__page_container'>
        <Navigation loggedIn={true}/>
        <ProfileForm infoMessage={infoMessage}/>
      </div>
    </section>

  );
};

export default ProfilePage;