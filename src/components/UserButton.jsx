import UserAvatar from "./UserAvatar";

export default function UserButton({ userdata }) {
  return (
    <button className="user_button">
      <UserAvatar image={userdata.userpic} />
    </button>
  );
}
