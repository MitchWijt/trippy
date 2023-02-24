import styles from '../styles/Button.module.css';

type ButtonProps = {
  title: string
  className?: string
  type: 'home' | 'form'
  onClick?: () => {}
}

export const Button = (props: ButtonProps) => {
  if(props.type === 'home') {
    return <HomeButton {...props}/>
  } else {
    return <button onClick={props.onClick} className={props.className}>{props.title}</button>
  }
}


const HomeButton = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles.homeButton}>{props.title}</button>
  )
}
