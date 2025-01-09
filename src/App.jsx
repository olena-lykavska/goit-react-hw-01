import React from "react";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json"; // Дані для профілю користувача
import friendsData from "./data/friends.json"; // Дані для списку друзів
import transactionsData from "./data/transactions.json"; // Дані для історії транзакцій

// Головний компонент App, який використовує всі інші компоненти
const App = () => {
  return (
    <div>
      {/* Компонент Profile відображає профіль користувача */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      {/* Компонент FriendList відображає список друзів */}
      <FriendList friends={friendsData} />

      {/* Компонент TransactionHistory відображає історію транзакцій */}
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};

export default App;
