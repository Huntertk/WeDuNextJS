'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Price',
  description: 'Products Page',
}

const Price = () => {
    const [seeMore, setSeeMore] = useState(false)

  return (
    <main className={styles.priceContainer}>
      <div className={styles.priceDesc}>
        <h1 className={styles.title}>Explore Our Pricing Options</h1>
        <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <button className={styles.btn}>See More</button>
      </div>
      <div className={styles.priceCard}>
        <div className={styles.bestValue}>Best Value</div>
        <div className={styles.priceCardTopContent}>
            <h1 className={styles.title}>Premium</h1>
            <h1 className={styles.priceTitle}>$ 50</h1>
            <p className={styles.priceCardDesc}>Every Month</p>
            <p className={styles.priceCardDesc}>Use this area to describe one of your memberships.</p>
            <p className={styles.priceCardDesc}>Valid for 12 months</p>
            <button className={styles.cardBtn}>Get Started</button>
            <button 
            className={styles.seeMoreBtn}
            onClick={() => {
                setSeeMore((prev) => {
                    return prev ? false : true
                })
            }}
            >See More</button>
        </div>
        {
            seeMore && <div className={styles.priceCardBottomContent}>
            <p className={styles.productFeatures}>✅ 24X7 Support</p>
            <p className={styles.productFeatures}>✅ Tech Support</p>
            <p className={styles.productFeatures}>✅ 1TB Storage</p>
            <p className={styles.productFeatures}>✅ High Performance G.P.U</p>
        </div>
        }
      </div>
    </main>
  )
}

export default Price
