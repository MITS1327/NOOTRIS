import React from 'react';
import style from './Ad.module.scss';
import mainImg from '../../../assets/Mask Group.png';

const Ad = () => {

    return (
        <div className={style.ad}>
            <div className={style.adLeft}>
                <div className={style.adTop}>
                    <h1 className={style.adTopHeading}>
                        АКТИВИРУЙ ИММУНИТЕТ!
                    </h1>
                    <p className={style.adTopDescription}>
                        Всего пять секунд в день помогут укрепить иммунитет
                        и повысить защитные силы организма
                    </p>
                </div>
                <div className={style.adBottom}>
                    <h2 className={style.adBottomHeading}>
                        NOOTRIS ПОМОГАЕТ
                    </h2>
                    <p className={style.adBottomDescription}>
                        Вашему организму во время пандемии
                        и сезонных простуд
                    </p>
                </div>
            </div>
            <div className={style.adRightDesktop}>

            </div>
            <div className={style.adRightMobile}>
                <img src={mainImg} />
            </div>
        </div>
    )
}

export default Ad;