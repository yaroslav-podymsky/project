import React from 'react';
import s from './Setting.module.css';

const Setting = (props) => {
    return (
    <ul className={s.list}>
      <li className={s.item}>Общие</li>
      <li className={s.item}>Безопасность</li>
      <li className={s.item}>Приватность</li>
      <li className={s.item}>Уведомления</li>
      <li className={s.item}>Чёрный список</li>
      <li className={s.item}>Мобильные сервисы</li>
      <li className={s.item}>Платёжные сервисы</li>
    </ul>
    )
}

export default Setting;