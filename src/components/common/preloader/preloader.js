import React from 'react';
import preloader from './../../../img/preloader.gif';
import style from '../preloader/preloader.module.css'

let Preloader = (props) => {
return <div className={style.preloaderContainer}>
<img className={style.preloader} src={preloader} />
</div>
}

export default Preloader;