import React from 'react';
import style from './Order.module.scss';
import Virus from '../../../assets/vorus.png';
import Box from '../../../assets/nootris.png';
import Ginger from '../../../assets/ginger.png';

const Order = () => {

    return (
        <div className={style.order}>
            <div className={style.orderHeadings}>
                <p className={style.orderHeading}>
                    ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                </p>
                <p className={style.orderHeadingDescription}>
                    СО СКИДКОЙ -15% ПЕРВЫМ!
                </p>
            </div>
            <div className={style.orderPrice}>
                <p className={style.orderPriceOld}>750₽</p>
                <p className={style.orderPriceNew}>690₽</p>
            </div>
            <div className={style.orderContent}>
                <ul className={style.orderList}>
                    <li className={style.orderLi}>
                        <img className={style.orderLiImg} src={Ginger} />
                        <p className={style.orderLiHeading}>
                            Содержит
                        </p>
                        <p className={style.orderLiDescription}>
                            имбирь
                        </p>
                    </li>
                    <li className={style.orderLi}>
                        <img className={style.orderLiImgBig} src={Box} />
                        <p className={style.orderLiHeadingBig}>
                            + Бесплатная доставка
                        </p>
                        <p className={style.orderLiDescriptionBig}>
                            Специальная цена
                        </p>
                    </li>
                    <li className={style.orderLi}>
                        <img className={style.orderLiImg} src={Virus}/>
                        <p className={style.orderLiHeading}>
                            Нейтрализует
                        </p>
                        <p className={style.orderLiDescription}>
                            вирусы
                        </p>
                    </li>
                </ul>
            </div>
            <div className={style.orderBtnBox}>
                <button className={style.orderBtn}>
                    Оформить заказ!
                </button>
            </div>
        </div>
    )
};

export default Order;