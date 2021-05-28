import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
    <ul className={s.list}>
      <li className={s.item}><iframe src="https://store.steampowered.com/widget/826630/254069/?t=%D0%BF%D0%BE%D1%86%D0%B0%D0%BD%20%D0%B2%20%D1%88%D0%BE%D0%BA%D0%B5!" frameborder="0" width="646" height="190"></iframe></li>
    </ul>
    )
}

export default News;