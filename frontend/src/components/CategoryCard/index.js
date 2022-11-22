import React from 'react';
import styles from './category.module.css';
import img from '../../assets/images/bajuMuslim3.png';

const Category = () => {
  return (
    <div className={styles.cardCategory}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.title}>name</div>
    </div>
  );
};

export default Category;
