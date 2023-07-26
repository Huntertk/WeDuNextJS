import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'Products',
  description: 'Products Page',
}

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>What We Offer</h1>
        <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.ProductCard}>
          <div className={styles.imgContainer}>
            <Image src="/prodcutImgOne.png" fill={true} alt="" className={styles.img} />
          </div>
          <h1 className={styles.title}>Workflows That Work</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>

        <div className={styles.ProductCard}>
          <div className={styles.imgContainer}>
            <Image src="/prodcutImgTwo.png" fill={true} alt="" className={styles.img} />
          </div>
          <h1 className={styles.title}>All-In-One Solution</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>

        <div className={styles.ProductCard}>
          <div className={styles.imgContainer}>
            <Image src="/prodcutImgThree.png" fill={true} alt="" className={styles.img} />
          </div>
          <h1 className={styles.title}>Comprehensive Customer Support</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>

        <div className={styles.ProductCard}>
          <div className={styles.imgContainer}>
            <Image src="/prodcutImgFour.png" fill={true} alt="" className={styles.img} />
          </div>
          <h1 className={styles.title}>Smart Automation Tools</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
    </div>
  )
}

export default Products
