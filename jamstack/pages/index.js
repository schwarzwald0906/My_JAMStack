import Container from 'components/container'
import Image from 'next/image'
import styles from 'styles/index.module.css'
import SlideShow from 'components/molecules/slideShow'
import CheckBox from 'components/molecules/checkBox'
import Title from 'components/molecules/title'
import PostBody from 'components/post-body'
import TopCard from 'components/oraganism/topCard'
import utilStyles from 'styles/utils.module.css'

import homeEyeCatch from 'public/images/topPage/home-eyecatch.jpg'
import cureStep2 from 'public/images/topPage/cure-step2.png'
import cureStep3 from 'public/images/topPage/cure-step3.png'
import cureStep4 from 'public/images/topPage/cure-step4.png'
import cureStep5 from 'public/images/topPage/cure-step5.png'
import TopPageFigure from 'components/oraganism/topPageFigure'
import AboutCard from 'components/oraganism/aboutCard'

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
          placeholder="blur"
          style={{ transition: '0.2s' }}
          quality={50}
        />
      </figure>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <h4 className={styles.textBlack}>
            {[
              '本気で治したい方のみ、お越しください',
              <br />,
            ]}
            <span className={styles.textPink}>理学療法士</span>
              {[
              'の私が施術します',
              <br />,
              '完治するまで必ずお付きあいします',
            ]}
            </h4>
            <p className={styles.name}>
              <span className={styles.textPink}>理学療法士</span>　行之内真人
              </p>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <h3 className={utilStyles.center}>
            このようなお悩みはありませんか？
          </h3>
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
          <Container>
            <div className={utilStyles.center}>
              <TopPageFigure />
            </div>
          </Container>
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
          <h3 className={utilStyles.center}>
            FLUXUS LOCUSで人生が変わったお客様
          </h3>
          <SlideShow />
        </Container>
      </div>
      <div style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <h3 className={utilStyles.center}>施術の流れ</h3>
          <PostBody>
            <div className={styles.gridContainer}>
              <TopCard
                imageSrc={cureStep2}
                imageAlt="cureStep2"
                title="カウンセリング"
                content="生活習慣や現在に至るまで身体に積み重なったダメージなどから、身体の不調の発生原因を分析します。他院ではここまで細かく聞かれたことが無いと驚かれます。"
              />
              <TopCard
                imageSrc={cureStep3}
                imageAlt="cureStep3"
                title="触診"
                content="身体の不調が生じている部位や発生原因と考えられる部位を、血管や神経まで 身体の最深部まで触診して、異常を発している部位を特定します。 "
              />
              <TopCard
                imageSrc={cureStep4}
                imageAlt="cureStep4"
                title="施術"
                content="ゆがみの原因部位を調整し、痛みや不調を改善します。その場で変化や効果を実感していただけます。"
              />
              <TopCard
                imageSrc={cureStep5}
                imageAlt="cureStep5"
                title="今後の説明（希望者のみ）"
                content="身体に起きている問題を解決するためには他にどこのアプローチが 必要か、どのくらい期間がかかるかの計画を希望者にのみ説明します。 "
              />
              {/* <h3 className={utilStyles.center}>ご予約はこちらから</h3>
            <h4>
              {[
                'リンク先からWEB予約をお願いします。',
                <br />,
                '予約後、仮予約のメールを折り返し送ります。',
                <br />,
                'その後、こちらで日程を確認し、本予約のメールをお送りします。',
              ]}
            </h4> */}
            </div>
          </PostBody>
        </Container>
      </div>
    </>
  )
}
