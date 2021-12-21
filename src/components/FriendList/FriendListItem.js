import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ status, name, avatar }) {
  return (
    <li className={s.item}>
      <span className={status ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default FriendListItem;
