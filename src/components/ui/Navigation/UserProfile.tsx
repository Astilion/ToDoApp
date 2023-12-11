import userProfileImg from '../../../assets/profile.jpg'

const UserProfile = () => {
    return (
        <div className="mb-1 ">
        <img className='rounded-full' src={userProfileImg} alt="" />
        <span>Profile Name</span>
      </div>
    )
}

export default UserProfile