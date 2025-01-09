import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css"; // Підключення стилів

// Компонент Profile — це простий компонент, який відображає профіль користувача
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      {/* Опис профілю: аватар, ім'я користувача, тег і місцезнаходження */}
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} /> {/* Виводимо аватар */}
        <p className={styles.name}>{name}</p> {/* Виводимо ім'я */}
        <p className={styles.tag}>@{tag}</p> {/* Виводимо тег */}
        <p className={styles.location}>{location}</p> {/* Виводимо місцезнаходження */}
      </div>

      {/* Виводимо статистику */}
      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Перевірка типів для пропсів
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
