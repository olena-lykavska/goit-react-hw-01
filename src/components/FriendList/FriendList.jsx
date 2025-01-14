import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem"; // Імпорт компоненту FriendListItem
import styles from "./FriendList.module.css";

// Компонент FriendList приймає масив friends через пропси
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {/* Ітеруємо масив friends і рендеримо кожного друга через компонент FriendListItem */}
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id} // Унікальний ключ для кожного друга
          avatar={avatar} // Передаємо URL аватара
          name={name} // Передаємо ім'я друга
          isOnline={isOnline} // Передаємо статус друга
        />
      ))}
    </ul>
  );
};

// Валідація пропсів для компоненту FriendList
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Унікальний ID друга
      avatar: PropTypes.string.isRequired, // URL аватара
      name: PropTypes.string.isRequired, // Ім'я друга
      isOnline: PropTypes.bool.isRequired, // Статус друга (true/false)
    })
  ).isRequired,
};

export default FriendList;
