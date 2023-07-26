import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        className={styles.image} 
        src="/imgOne.png" 
        fill={true}
        priority={true} 
        alt=''  
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Communicate. Collaborate. Create.</h1>
          <p className={styles.para}>WeDu provides an effective and powerful way to manage your projects</p>
        </div>
        <div className={styles.btnContainer}>
          <p className={styles.feature}>- Speed & Security</p>
          <p className={styles.feature}>- Flexibility & Scalability</p>
          <p className={styles.feature}>- Better & Collaboration</p>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>
    </main>
  )
}
