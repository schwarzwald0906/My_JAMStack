import Image from 'next/image'
import style from 'styles/accessCard.module.css'

export default function AccessCard({ imageSrc, imageAlt, content }) {
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
        <p>{content}</p>
      </div>
    </div>
  )
}
