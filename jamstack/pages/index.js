import React from 'react'
import Container from 'components/container'
import Image from 'next/image'
import homeEyeCatch from 'public/images/toppage/home-eyecatch.jpg'
import styles from 'styles/index.module.css'
import SlideShow from 'components/molecules/slideShow'
import CheckBox from 'components/molecules/checkBox'
import Title from 'components/molecules/title'
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
          priority
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

      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <h4 style={{ textAlign: 'center' }}>
            ◎このようなお悩みはありませんか？
          </h4>
          <CheckBox msg="肩こり, 腰痛がどこに行っても良くならない" />
          <CheckBox msg="痛み止めやその場しのぎのマッサージはもう嫌だ" />
          <CheckBox msg="痛み・しびれから歩くのも生活するのもつらい" />
          <CheckBox msg="趣味の登山などを腰や膝の痛みで諦めている" />
          <CheckBox msg="スポーツを本格的にやると ケガばかりする" />
          <CheckBox msg="理想的なイメージで身体が動かない " />
          <CheckBox msg="そもそもなぜ痛いのか、誰も教えてくれない " />
        </Container>
      </div>
      <div style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <h4>
            {[
              '当院では、アメリカの整体医学を取り入れ',
              <br />,
              '徹底した根本治療で身体機能の回復・改善を促します',
              <br />,
              'その場しのぎの対症療法は、一切行いません',
            ]}
          </h4>
          <Title digit={1} msg="他院では痛みが完治しなかったお客様" />
          <p>
            {[
              'そもそも痛みは、なぜ発生するのでしょうか？',
              <br />,
              '多くの場合、それは神経系やインナーマッスルの不調に由来しています。',
              <br />,
              <br />,
              'しかし、神経系へのアプローチには、高度で精密な技術を要するため、他院では、身体の歪みを取り除くだけで手一杯です。',
              <br />,
              'ただ、それでは、根本からの改善は望めません。',
              <br />,
              '当院では、入念な触診により、神経系やインナーマッスルにアプローチし、痛み・不調をその原因から取り除きます。',
            ]}
          </p>
          <Title digit={2} msg="身体のパフォーマンスを向上させたいお客様" />
          <p>
            {[
              'あなたは、身体の筋肉の何割を「使えて」いますか？',
              <br />,
              'アウターマッスルが200種あるのに対し、',
              <br />,
              'インナーマッスルは、なんと202種',
              <br />,
              <br />,
              'しかし世の中にアウターマッスルの鍛え方を解説する本や動画は数あれど、',
              'インナーマッスルを正しく鍛えるトレーニングはほとんどありません。',
              <br />,
              '多くの人が、インナーマッスルをほぼ全く使えないまま生活しています。',
              <br />,
              <br />,
              'その結果、腰痛や鞭打ちなどの身体の歪みを誘発します。',
              <br />,
              '当院では独自のアプローチで、ゆがみがもう二度と出ない身体を獲得します。',
            ]}
          </p>
        </Container>
      </div>

      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <div>
            <h3>FLUXUS LOCUSで人生が変わったお客様</h3>
            <SlideShow />
          </div>
        </Container>
      </div>
    </>
  )
}
