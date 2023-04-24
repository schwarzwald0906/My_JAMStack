import Image from 'next/image'
import style from 'styles/aboutCard.module.css'

export default function AboutCard({ imageSrc, imageAlt, content, title }) {
  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      <div className={style.wrapper}>
        <div className={style.flexContainer}>
          <figure className={style.image}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="responsive"
              sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            />
          </figure>
          <h4>{title}
          <p>{content}</p>
          </h4>
        </div>
      </div>
    </div>
  )
}
