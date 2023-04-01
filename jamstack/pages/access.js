// import React from 'react'
import Container from 'components/container'
import PostBody from 'components/post-body'
import AccessCard from 'components/oraganism/accessCard'
import utilStyles from 'styles/utils.module.css'
import styles from 'styles/access.module.css'
import Image from 'next/image'

import about1 from 'public/images/about/about1.jpg'
import accessEyeCatch from 'public/images/access/access-eyecatch.jpg'
import OverviewTable from 'components/oraganism/ overviewTable'

export default function Access() {
  return (
    <>
      <figure className={styles.figure}>
        <Image
          src={accessEyeCatch}
          alt=""
          layout="responsive"
          objectPosition="top"
          objectFit="cover"
          priority
        />
      </figure>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <p className={styles.title}>{['アクセス・営業時間']}</p>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <OverviewTable />
        </Container>
      </div>
      <div style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <h3 className={utilStyles.center}>桜木町駅南口からの道順</h3>
          <PostBody>
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="地図の赤丸が当院です"
            />
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="桜木町駅の新南口から改札を出たら、左へ道なりに歩きます"
            />
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="横断歩道を渡り、右側の弁天橋を渡ります"
            />
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="隣りのファミリーマートが目印です"
            />
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="日本酒バルClareさんの隣が入口です"
            />
            <AccessCard
              imageSrc={about1}
              imageAlt="about1"
              content="入口まで来たら、インターホンで705と押してください"
            />
          </PostBody>
        </Container>
      </div>
    </>
  )
}
