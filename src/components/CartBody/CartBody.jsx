import React from 'react';
import style from './CartBody.module.scss';

const CartBody = () => {
    return (
        <div className={style.cartBody}>
            <p className={style.cartDescription}>
                Кажется ваша корзина пуста ...
            </p>
        </div>
    )
}

export default CartBody;