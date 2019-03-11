import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './Users.module.scss';

const Users = () => (
  <div className={styles['users']}>
      <div className={styles['users__item']}>
        <img src={'https://images.unsplash.com/photo-1552197956-eb7334216110?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt={"description"} className={styles['users__item__image']} />
        <div className={styles['users__item__info']}>
          <div className={styles['users__item__info__name']}>John Doe</div>
          <div className={styles['users__item__info__username']}>@johnDoe</div>
        </div>
      </div>
    <div className={styles['users__item']}>
      <img src={'https://images.unsplash.com/photo-1552197956-eb7334216110?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt={"description"} className={styles['users__item__image']} />
      <div className={styles['users__item__info']}>
        <div className={styles['users__item__info__name']}>John Doe</div>
        <div className={styles['users__item__info__username']}>@johnDoe</div>
      </div>
    </div>
    <div className={styles['users__item']}>
      <img src={'https://images.unsplash.com/photo-1552197956-eb7334216110?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} alt={"description"} className={styles['users__item__image']} />
      <div className={styles['users__item__info']}>
        <div className={styles['users__item__info__name']}>John Doe</div>
        <div className={styles['users__item__info__username']}>@johnDoe</div>
      </div>
    </div>
  </div>
);

export default Users;
