import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          status={friend.isOnline}
          name={friend.name}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
}

export default FriendList;
