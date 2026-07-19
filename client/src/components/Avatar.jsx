import '../css/Avatar.css';

const Avatar = ({ user }) => {
  return (
    <div className='Avatar'>
      <img className='user-img' src={user.avatarurl} />
    </div>
  );
};

export default Avatar;
