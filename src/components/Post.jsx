import { format, formatDistanceToNow  } from "date-fns"
import ptBR from "date-fns/locale/pt-Br"
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"


export const Post = ({ author, publishedAt, content }) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ])
    
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
      })


    function handleCrateNewComment(evt){
        evt.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
      }
      
    function deletComment(commentToDelete) {
          const commentsWithoutDeletedOne = comments.filter(comment => {
              return comment !== commentToDelete
            })
            setComments(commentsWithoutDeletedOne)
        }
        
    function handleNewCommentChange() {
            event.target.setCustomValidity('')
            setNewCommentText(event.target.value)
        }

    function handleNewCommentInvalid() {
          event.target.setCustomValidity('Esse campo é obrigatório!')
        }

    const isNewCommentEmpty = newCommentText.length === 0
    
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar  src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else if(line.type === 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCrateNewComment} className={styles.contentForm}>
            <strong>Deixe seu feedback</strong> 
            <textarea
                name='comment'
                placeholder="Deixe seu comentario" 
                onChange={handleNewCommentChange} 
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
            />
            <footer>
                <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment 
                    key={comment} 
                    comment={comment} 
                    ondeletComment={deletComment}
                />
                )
            })}
        </div>
    </article>
  )
}
