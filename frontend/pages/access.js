import Container from 'components/container'
import PostBody from 'components/post-body'
import AccessCard from 'components/oraganism/accessCard'
import utilStyles from 'styles/utils.module.css'
import styles from 'styles/access.module.css'
import Image from 'next/image'

import navi1 from 'public/images/access/navi1.jpg'
import navi2 from 'public/images/access/navi2.jpg'
import navi3 from 'public/images/access/navi3.jpg'
import navi4 from 'public/images/access/navi4.png'
import navi5 from 'public/images/access/navi5.jpeg'
import accessEyeCatch from 'public/images/access/access-eyecatch.jpg'
import OverviewTable from 'components/oraganism/overviewTable'
import Meta from 'components/templates/meta'

export default function Access() {
  return (
    <>
      <Meta
        pageTitle="アクセス"
        pageDesc="所在地・営業時間及び桜木町駅からの道順"
      />
      <figure className={styles.figure}>
        <Image
          src={accessEyeCatch}
          alt=""
          layout="responsive"
          objectPosition="top"
          objectFit="cover"
          priority
          placeholder="blur"
          style={{ transition: '0.2s' }}
          quality={5}
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
          <h3 className={utilStyles.center}>桜木町駅新南口からの道順</h3>
          <p style={{ padding: '10px 0px' }}>※新南口からが便利です</p>
          <PostBody>
            <div className={styles.gridContainer}>
              <AccessCard
                imageSrc={navi1}
                imageAlt="navi1"
                content="地図の赤丸が当院です"
              />
              <AccessCard
                imageSrc={navi2}
                imageAlt="navi2"
                content="桜木町駅の新南口から改札を出たら、左へ道なりに歩きます"
              />
              <AccessCard
                imageSrc={navi3}
                imageAlt="navi3"
                content="横断歩道を渡り、右側の弁天橋を渡ります"
              />
              <AccessCard
                imageSrc={navi4}
                imageAlt="navi4"
                content="右手にFamily Martが見えてきます。その先の日本酒バルClareさんの隣が入口です"
              />
              <AccessCard
                imageSrc={navi5}
                imageAlt="navi5"
                content="入口まで来たら、インターホンで705と押してください"
              />
            </div>
          </PostBody>
        </Container>
      </div>
    </>
  )
}
