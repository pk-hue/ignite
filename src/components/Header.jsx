 import styles from "./Header.module.css"
 import ingitelogo from "../assets/ignite-simbol.svg"

 console.log(ingitelogo)

 export const Header = () => { 
  return (
    <header className={styles.header}>
    <img src={ingitelogo} alt="ignite logo" />
    <strong>Ignite feed</strong>
    </header>
  )
}
