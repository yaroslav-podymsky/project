import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
    <ul className={s.list}>
      <li className={s.item}>Какая-то новость!!!</li>
    </ul>
    )
}

export default News;