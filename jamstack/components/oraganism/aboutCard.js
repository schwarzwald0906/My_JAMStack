import Image from 'next/image'
import style from 'styles/aboutCard.module.css'

export default function AboutCard({ imageSrc, imageAlt, content, title }) {
  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      <div className={style.wrapper}>
        <div>
          <figure>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="responsive"
              width={368}
              height={218}
            />
          </figure>
        </div>
        <h3 style={{ fonSize: 'var(--small-heading3)' }}>{title}</h3>
        <body>{content}</body>
      </div>
    </div>
  )
}
