import React from 'react'
import Container from 'components/container'
import OverviewTable from 'components/oraganism/ overviewTable'
import utilStyles from 'styles/utils.module.css'

import cureStep2 from 'public/images/toppage/cure-step2.png'
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
              'あなたの希望や目標・悩みに寄り添い、',
              <br />,
              '効果的なケアや運動指導でサポートします',
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
            ※初回のみ、＋30分カウンセリングのお時間をいただきます
          </p>
          <PlanCard
            imageSrc={cureStep2}
            imageAlt="cureStep2"
            title="症状改善コース"
            firstPlan="初回 30分 3,800円 / 60分 8,800円"
            standardPlan="通常 30分 6,000円 / 60分 12,000円"
            content={[
              'お客様の身体の状態に合わせて 全てオーダーメイドで分析×施術×トレーニングを行います',
              <br />,
              <br />,
              '腰痛・肩こり・膝の痛みや変形・変形性股関節症・変形 性膝関節症・頚椎症・ムチ打ち・椎間板ヘルニアなど各種脊椎疾患・五十肩・腱鞘炎・半月板損傷・頭痛（片頭痛や緊張性頭痛）・ 各関節の靭帯・損傷ネンザ・外反母趾・骨折後の後遺症・神経痛など様々な治療実績あり',
              <br />,
              <br />,
              '痛みの出ない小顔矯正や顔の左右差矯正・顎関節矯正なども対応できます。',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />
          <PlanCard
            imageSrc={cureStep2}
            imageAlt="cureStep2"
            title="トレーニングコース"
            firstPlan="初回 30分 3,800円 / 60分 8,800円"
            standardPlan="通常 30分 6,000円 / 60分 12,000円"
            content={[
              'インナーマッスルの身体の使い方で、スポーツ障害を予防するだけでなく、パワー・バランス・スピード・柔軟性を高める身体の土台を作ることができます。',
              <br />,
              <br />,
              '理想的な運動に必要な6つの要素は次の通りです。',
              <br />,
              '1. 仙骨から後頭骨まで独立して動く背骨',
              <br />,
              '2. 呼吸と柔軟な体幹を生み出す最適な胸郭',
              <br />,
              '3. 背骨や肩から解放され自由に動く肩甲骨',
              <br />,
              '4. 骨盤から自然に動く可動性抜群の股関節 ',
              <br />,
              '5. 足のバネをフルで使える膝と足首 ',
              <br />,
              '6. 細かくコントロールできる肩・肘・手 ',
              <br />,
              <br />,
              'これらの要素は、インナーマッスルを改善することで、大幅な改善が期待できます。このコースは、ダンス、ゴルフ、トライアスロン、テニスなどをしている方に高く評価されています。ケガの予防やパフォーマンスの向上を目的としています。 ス・ゴルフ・トライアスロン・テニスをしている方などに 高評価をいただいているコースとなります。',
            ]}
          />
          <div style={{ padding: '10px 0px' }} />
          <PlanCard
            imageSrc={cureStep2}
            imageAlt="cureStep2"
            title="インナーマッスル活性化コース"
            firstPlan="スタンダード　280,000円"
            standardPlan="プレミアム　　780,000円"
            content={[
              '現代では人生100年時代を迎え、身体の変形や痛みを避けて過ごすためにヨガやピラティス、体幹トレーニングを行う人が増えています。しかし、正しい身体の使い方が分からない方も多いでしょう。そこで、このコースでは101種類、202個のインナーマッスルを全身を使って徹底サポートします。',
              <br />,
              <br />,
              'このプランでは、以下のような効果が期待できます。',
              <br />,
              '1. 自然に美しい姿勢で座れる ',
              <br />,
              '2. 難しかったトレーニングがスムーズにできるようになる',
              <br />,
              '3. 生活の中でのカロリー消費が倍増する',
              <br />,
              '4. 身体が整い、快調に動ける',
              <br />,
              '5. 一生自分の足で歩ける身体が手に入る ',
              <br />,
              <br />,
              '正しい身体の使い方を身につけることで、人生100年を健やかに過ごせるようになるでしょう。',
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
