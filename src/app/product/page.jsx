import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Testimonials from '@/components/Testimonails/Testimonials'

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

      <div className={styles.heroSection}>
        <div className={styles.imgHeroContainer}>
          <Image src="/imgback.png" fill={true} alt="" className={styles.heroImg} />
        </div>
          <h1 className={styles.title}>Built for Creatives, by Creatives</h1>
          <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
      <div className={styles.partnerContainer}>
         <h1 className={styles.title}>"Trusted Among Industry Leaders"</h1>
         <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>

        <div className={styles.logoContainer}>

          <div className={styles.companyLogoContainer}>
            <Image src="/1.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/2.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/3.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/4.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/5.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/6.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/6.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/7.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
          <div className={styles.companyLogoContainer}>
            <Image src="/8.jpg" fill={true} alt="" className={styles.companyLogo} />
          </div>
        </div>

      </div>

      <div className={styles.testimonails}>
        <h1 className={styles.title}>What Our Clients Say</h1>
        <div className={styles.underline}></div>
        <Testimonials />
      </div>
      
    </div>
  )
}

export default Products
