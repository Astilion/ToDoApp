import userProfileImg from "../../../assets/profile.jpg";

const UserProfile = () => {
  return (
    <div className="mb-1">
      <div className="mr-4 flex items-center gap-1">
        <img className="rounded-full" src={userProfileImg} alt="" />
        <button className="whitespace-nowrap rounded-lg bg-sky-700 px-3 py-1 font-bold text-white transition-colors hover:bg-sky-500 sm:ml-2">
          Log In
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
