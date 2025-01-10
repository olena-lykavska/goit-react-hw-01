import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

// Компонент для відображення історії транзакцій
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          {/* Заголовки таблиці */}
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {/* Проходимося по масиву транзакцій і створюємо рядок для кожної */}
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            {/* Кожна транзакція містить тип, суму та валюту */}
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Перевірка типів пропсів для забезпечення правильності переданих даних
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Унікальний ідентифікатор транзакції
      type: PropTypes.string.isRequired, // Тип транзакції (Invoice, Payment, Withdrawal)
      amount: PropTypes.string.isRequired, // Сума транзакції
      currency: PropTypes.string.isRequired, // Валюта транзакції
    })
  ).isRequired,
};

export default TransactionHistory;
