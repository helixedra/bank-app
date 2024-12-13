export default function UserAvatar({ image, title }) {
  return (
    <div
      className="user_avatar"
      title={title}
      style={{ backgroundImage: `url('/images/${image}')` }}
    ></div>
  );
}
