import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

// Компонент FriendListItem відповідає за рендеринг одного друга
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendItem}>
      {/* Аватар друга */}
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      {/* Ім'я друга */}
      <p className={styles.name}>{name}</p>
      {/* Статус друга (зелений/червоний текст залежно від онлайн-статусу) */}
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

// Валідація пропсів для FriendListItem
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired, // URL аватара
  name: PropTypes.string.isRequired, // Ім'я друга
  isOnline: PropTypes.bool.isRequired, // Статус друга (true/false)
};

export default FriendListItem;
