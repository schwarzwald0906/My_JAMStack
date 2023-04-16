import Image from 'next/image'
import style from 'styles/planCard.module.css'
import utilStyle from 'styles/utils.module.css'

export default function PlanCard({
  imageSrc,
  imageAlt,
  content,
  title,
  firstPlan,
  standardPlan,
}) {
  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      <div className={style.deskTopWrapper}>
        <div className={style.flexContainer}>
          <figure className={style.image}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="responsive"
              width={368}
              height={218}
            />
          </figure>
          <div className={style.smahoWrapper}>
            <h3 className={utilStyle.center}>{title}</h3>
            <div style={{ padding: '5px 0px' }} />
            <div className={style.line}></div>
            <h3 className={style.plan}>{firstPlan}</h3>
            <div className={style.line}></div>
            <h3 className={style.plan}>{standardPlan}</h3>
            <div className={style.line}></div>
            <div style={{ padding: '10px 0px' }} />
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
