import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?auto=format&fit=crop&q=40&w=470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />

        <div className={styles.profile}>
            <Avatar src="https://github.com/pk-hue.png"/>

            <strong>Pedro H.</strong>
            <span>Wed Developer</span>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </div>
    </aside>
  )
}