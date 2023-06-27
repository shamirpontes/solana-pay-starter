import React from "react";
import styles from "../styles/Product.module.css";
import IPFSDownload from './IpfsDownload';

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div className={styles.product_container}>
      <div >
        <img className={styles.product_image}src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>
          {/* Estou usando um código rígido. Isto por enquanto. Vamos buscar o hash da API mais tarde.*/}
          <IPFSDownload filename="emojis.zip" hash="QmQMsgNjXu6eFFWrxyB7ZFrjqv9wK64EyAD5q1pdj2r7ma" cta="Download pdf"/>
        </div>
      </div>
    </div>
  );
}