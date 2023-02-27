import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Title } from '../components/title'

export default function Home() {
  return (
    <div>
      <title>Trippy</title>
      <div className={styles.container}>
        <div className={`${styles.mainTitle} ${styles.center} d-flex`}>
          <Title className="bold m-b-20" title="Trippy" fontSize={50}/>
          <p className={`${styles.mainSubTitle} thin`}>Your favourite tour guide that will never let you down</p>
        </div>
        <div className='d-flex j-c-sb m-t-40'>
          <Image src="/images/car.jpg" height={200} width={200} alt="car image"/>
          <p>this is text</p>
        </div>
      </div>
    </div>
  )
}
