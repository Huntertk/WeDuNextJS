"use client"
import React, { useState } from 'react'
import styles  from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navToggle = () =>{
    setIsNavOpen((prev) => {
      return prev ? false : true
    })
  }


  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>WeDu</h1>
          <p className={styles.slogan}>Communicate. Collaborate. Create.</p>
        </div>
        <div className={styles.navLinksContainer}>
          <div 
          className={styles.navBtnContainer}
          onClick={navToggle}
          >
            {
              isNavOpen ? <span className={styles.icon}>&#10060;</span> : <span className={styles.icon}>&#9776;</span> 
            }
          </div>
          {
            isNavOpen &&
            <div className={styles.navLinksWrapper}>
            <Link href="/"
            className={styles.navLink}
            onClick={() => setIsNavOpen(false)}
            >Home</Link>

            <Link href="/product"
            className={styles.navLink}
            onClick={() => setIsNavOpen(false)}
            >Product</Link>

            <Link href="/price"
            className={styles.navLink}
            onClick={() => setIsNavOpen(false)}
            >Pricing Plans</Link>

            <Link href="/contact"
            className={styles.navLink}
            onClick={() => setIsNavOpen(false)}
            >Contact</Link>
          </div>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
