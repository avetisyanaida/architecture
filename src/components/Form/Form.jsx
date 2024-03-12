import React from 'react';

const AllForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Оставаться на связи</h3>
      <p>
        Мы не будем присылать вам бесконечные рассылки и сначала напишем, прежде чем позвонить.
        Оставьте телефон, и мы расскажем вам первыми о старте продаж.
      </p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Имя" type="text" />
        <input placeholder="Телефон" type="tel" />
        <input placeholder="Email" type="email" />
        <button className="form-btn" type="submit">Отправить</button>
      </form>
    </div>
  );
};
export default AllForm