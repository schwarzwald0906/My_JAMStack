import React from 'react'
import Container from 'components/container'
import Image from 'next/image'
import homeEyeCatch from 'public/images/homeEyeCatch.jpg'
import styles from 'styles/index.module.css'
import SlideShow from 'components/molecules/slideShow'

export default function Home() {
  return (
    <>
      <figure className={styles.figure}>
        <Image
          src={homeEyeCatch}
          alt=""
          layout="responsive"
          objectPosition="top"
          objectFit="cover"
        />
      </figure>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <p className={styles.title}>
            {[
              '整形外科や整骨院に行っても完治しなかった方',
              <br />,
              '身体のパフォーマンスを向上させたい方',
            ]}
          </p>
          <p className={styles.subtitle}>
            あなたの思いを叶える施術院が、ここ桜木町にあります
          </p>
          <p className={styles.name}>理学療法士　行之内真人</p>
        </div>
      </div>

      <Container>
        <p>ホーム</p>
      </Container>
      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <div>
            <h3>FLUXUS LOCUSで人生が変わった人たち</h3>
            <SlideShow />
            <br />
          </div>
        </Container>
      </div>
    </>
  )
}
