import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"

export const Comment = ({ comment, ondeletComment }) => {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        ondeletComment(comment)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/pk-hue.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pedro H.</strong>
                        <time 
                            title="24 de outubro ás 8:00h" 
                            dateTime='2023-10-24 08:13:30'>Cerca de 1h atrás
                        </time>
                    </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                </header>
                <p>{comment}</p>
            </div>
            <footer>
               <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
        </div>
    </div>
  )
}

