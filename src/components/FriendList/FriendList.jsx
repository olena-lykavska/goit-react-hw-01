import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

// Компонент FriendList для відображення списку друзів
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {/* Для кожного друга з масиву friends створюється елемент списку */}
      {friends.map((friend) => (
        <li key={friend.id} className={friend.isOnline ? styles.online : styles.offline}>
          <img src={friend.avatar} alt={friend.name} className={styles.avatar} />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

// Перевірка типів для пропсів
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
