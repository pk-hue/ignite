import styles from './Avatar.module.css'

export const Avatar = ({ hasBorder = true, src}) => {

  return (
    <div>
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    </div>
  )
}

