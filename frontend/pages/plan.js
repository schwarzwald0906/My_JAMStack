import Container from 'components/container'
import OverviewTable from 'components/oraganism/overviewTable'
import Link from 'next/link'
import styles from 'styles/plan.module.css'
import utilStyles from 'styles/utils.module.css'

import PlanCard from 'components/oraganism/planCard'
import Meta from 'components/templates/meta'
import basicPlan from 'public/images/plan/basicPlan.jpg'
import beautyPlan from 'public/images/plan/beautyPlan.jpg'
import trainingPlan from 'public/images/plan/trainingPlan.jpg'

export default function Plan() {
  return (
    <>
      <div style={{ backgroundColor: 'var(--light-gray)' }}>
        <Meta
          pageTitle="料金・プラン"
          pageDesc="施術の理念及び、プランの一覧"
        />
        <Container>
          <h1 className={utilStyles.center} style={{ color: 'var(--black)' }}>
            施術について
          </h1>
          <h3 style={{ padding: '10px 0px' }}>
            {[
              'あなたの希望や悩みに合わせた効果的なケアと運動指導で、',
              <br />,
              '健康な生活をサポートします',
            ]}
          </h3>
          <h4 style={{ color: 'var(--black)' }}>
            {[
              '当院の施術は、筋肉や関節・神経・筋膜だけでなく',
              <br />,
              'あなたの全ての細胞・組織を丁寧に触診し',
              <br />,
              'その場しのぎの対症療法は、一切行いません',
              <br />,
              'あなたの身体だけの問題を探します',
              <br />,
              '対症療法という浅いアプローチではなく、',
              <br />,
              '根本治療のアプローチを体験して下さい',
            ]}
          </h4>
        </Container>
      </div>
      <div style={{ backgroundColor: 'var(--light-yellow)' }}>
        <Container>
          <h2 className={utilStyles.center} style={{ color: 'var(--black)' }}>
            プラン一覧
          </h2>
          <p style={{ padding: '10px 0px' }}>
            初回は、施術前に30分カウンセリングのお時間をいただいてます。こちらの料金はかかりません。
          </p>
          <PlanCard
            imageSrc={basicPlan}
            imageAlt="basicPlan"
            title="症状改善プラン"
            firstPlan="初回 60分 6,000円 / 90分 8,800円"
            standardPlan="通常 60分 12,000円 / 120分 15,000円"
            content={[
              '腰痛・肩こり・膝の痛みや変形・変形性股関節症・変形性膝関節症・頚椎症・ムチ打ち・椎間板ヘルニアなど各種脊椎疾患・五十肩・腱鞘炎・半月板損傷・頭痛（片頭痛や緊張性頭痛）・ 各関節の靭帯・損傷ネンザ・外反母趾・骨折後の後遺症・神経痛など、様々な治療実績があります。',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />
          <PlanCard
            imageSrc={trainingPlan}
            imageAlt="trainingPlan"
            title="トレーニングプラン"
            firstPlan="初回 60分 6,000円 / 90分 8,800円"
            standardPlan="通常 60分 12,000円 / 120分 15,000円"
            content={[
              'インナーマッスルの身体の使い方で、スポーツ障害を予防するだけでなく、パワー・バランス・スピード・柔軟性を高める身体の土台を作ることができます。',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />
          <PlanCard
            imageSrc={beautyPlan}
            imageAlt="beautyPlan"
            title="美容プラン"
            firstPlan="通常 90分 18,000円"
            standardPlan=""
            content={[
              '深部筋膜までケア、90分で内側からスリムに！全身のリンパケア・インナーマッスルトレーニング・痛くない小顔ケアが受けられる特別なアプローチエステ。自分の潜在能力を引き出す施術です。※着替え不要です。',
            ]}
          />
          <div className={styles.buttons}>
            <Link legacyBehavior href="/blog/coupon">
              <a className={styles.button}>回数券</a>
            </Link>
            <Link legacyBehavior href="/blog/privilege">
              <a className={styles.button}>紹介特典</a>
            </Link>
          </div>
        </Container>
      </div>
      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <OverviewTable />
        </Container>
      </div>
    </>
  )
}
