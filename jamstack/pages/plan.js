import React from 'react'
import Container from 'components/container'
import OverviewTable from 'components/oraganism/overviewTable'
import utilStyles from 'styles/utils.module.css'

import basicPlan from 'public/images/plan/basicPlan.jpg'
import trainingPlan from 'public/images/plan/trainingPlan.jpg'
import innerPlan from 'public/images/plan/innerPlan.jpg'
import PlanCard from 'components/oraganism/planCard'

export default function Plan() {
  return (
    <>
      <div style={{ backgroundColor: 'var(--light-gray)' }}>
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
            ※初回のみ、＋30分カウンセリングのお時間をいただいてます。
            ※各プラン、お得な回数券もあります。詳しくは施術院まで。
          </p>
          <PlanCard
            imageSrc={basicPlan}
            imageAlt="basicPlan"
            title="症状改善コース"
            firstPlan="初回 30分 3,800円 / 60分 8,800円"
            standardPlan="通常 30分 6,000円 / 60分 12,000円"
            content={[
              '腰痛・肩こり・膝の痛みや変形・変形性股関節症・変形性膝関節症・頚椎症・ムチ打ち・椎間板ヘルニアなど各種脊椎疾患・五十肩・腱鞘炎・半月板損傷・頭痛（片頭痛や緊張性頭痛）・ 各関節の靭帯・損傷ネンザ・外反母趾・骨折後の後遺症・神経痛など様々な治療実績あり',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />
          <PlanCard
            imageSrc={trainingPlan}
            imageAlt="trainingPlan"
            title="トレーニングコース"
            firstPlan="初回 30分 3,800円 / 60分 8,800円"
            standardPlan="通常 30分 6,000円 / 60分 12,000円"
            content={[
              'インナーマッスルの身体の使い方で、スポーツ障害を予防するだけでなく、パワー・バランス・スピード・柔軟性を高める身体の土台を作ることができます。',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />

          <PlanCard
            imageSrc={innerPlan}
            imageAlt="innerPlan"
            title="インナーマッスル活性化コース"
            firstPlan="25回　250,000円"
            standardPlan="50回　700,000円"
            content={[
              '通常のリハビリ＆トレーニングに加え、',
              <br/>,
              '1.全身の評価を動画でお渡し',
              <br/>,
              '2.個別トレーニング指導動画 5本 ',
              <br/>,
              '3.FaceBookグループへご招待。質問にご回答します。',
              <br/>,
              '理想の体の動きを実現します。',
            ]}
          />
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
