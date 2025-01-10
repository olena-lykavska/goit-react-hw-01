import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

// Компонент FriendList приймає масив friends через пропси
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {/* Ітеруємо масив friends і створюємо елемент списку для кожного друга */}
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendItem}>
          {/* Аватар друга */}
          <img src={avatar} alt={`${name} avatar`} className={styles.avatar} />
          {/* Ім'я друга */}
          <p className={styles.name}>{name}</p>
          {/* Статус друга: Online або Offline */}
          <p className={isOnline ? styles.online : styles.offline}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

// Валідація пропсів для безпечного використання компоненту
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired, // URL аватара друга
      name: PropTypes.string.isRequired,  // Ім'я друга
      isOnline: PropTypes.bool.isRequired, // Статус друга (true/false)
      id: PropTypes.number.isRequired,    // Унікальний ID друга
    })
  ).isRequired,
};

export default FriendList;
