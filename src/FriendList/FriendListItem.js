import s from "./FriendListItem.module.css";

function FriendListItem({ status, name, avatar }) {
  return (
    <li className={s.item}>
      <span className={status ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
export default FriendListItem;
