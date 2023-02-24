import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Title } from '../components/title'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <div>
      <title>Trippy</title>
      <div className={styles.container}>
        <div className={`${styles.mainTitle} ${styles.center} d-flex`}>
          <Title className="bold m-b-20" title="Trippy" fontSize={50}/>
          <p className={`${styles.mainSubTitle} thin`}>Your favourite tour guide that will never let you down!</p>
        </div>
        <div className='d-flex j-c-sb m-t-40 a-i-c'>
          <Image src="/images/home-collage.png" height={500} width={500} alt="car image"/>
          <div className={`${styles.homeParagraph}`}>
            <Title className="bold m-b-20" title="A trip for everyone!" fontSize={30}/>
            <p className={`thin`}>Create a customised road trip plan to your liking.
              Just a few clicks and you are ready to go on your next
              adventure! :) </p>
          </div>
        </div>
        <div className='d-flex j-c-c'>
          <Button title="Start planning my trip!" type="home"/>
        </div>
      </div>
    </div>
  )
}
