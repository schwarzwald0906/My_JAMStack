import Container from 'components/container'
import AboutCard from 'components/oraganism/aboutCard'
import PostBody from 'components/post-body'
import utilStyles from 'styles/utils.module.css'
import styles from 'styles/about.module.css'
import Image from 'next/image'

import about1 from 'public/images/about/about1.png'
import about2 from 'public/images/about/about2.jpg'
import about3 from 'public/images/about/about3.png'
import about4 from 'public/images/about/about4.jpg'
import aboutEyeCatch from 'public/images/about/about-eyecatch.jpg'
import Head from 'next/head'
import Meta from 'components/templates/meta'

export default function About() {
  return (
    <>
      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Meta pageTitle="FLUXUS LOCUSについて" pageDesc="創業ストーリー" />
        <figure className={styles.figure}>
          <Image
            src={aboutEyeCatch}
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
            <p className={styles.title}>Vision</p>
            <p className={styles.subtitle}>
              {['根本治療で、100年先まで動ける体へ']}
            </p>
          </div>
        </div>
        <Container>
          <h2 className={utilStyles.center}>創業ストーリー</h2>
          <PostBody>
            <AboutCard
              imageSrc={about1}
              imageAlt="about1"
              title="幼少期"
              content={[
                '私は小学校3年生の時、バスケを始めました。周りには多くの友人がスポーツ障害を抱えていた中、私も中学校の頃に膝や腰を痛め、治療を繰り返す生活を送っていました。',
                <br />,
                '努力しているのに、痛みやケガに悩まされて成果が出せない。治そうとしているのに上手くいかない。',
                <br />,
                'そんな友人たちの姿を見て、理学療法士になる夢を抱くようになりました。',
                <br />,
              ]}
            />
            <AboutCard
              imageSrc={about2}
              imageAlt="about2"
              title="リハビリ病院で働く"
              content={[
                'その後、私は専門病院で理学療法士として働き始めます。しかし、同じ治療でも効果が出る人と出ない人がいることに気づきました。私自身も、治療をしてもすぐに元に戻ってしまうような気休め的な治療に疑問を持ちました。',
                <br />,
                'このままでは、苦しんでいる人たちを助けることはできないと感じました。',
                <br />,
                <br />,
              ]}
            />
            <AboutCard
              imageSrc={about3}
              imageAlt="about3"
              title="転機"
              content={[
                'そこで私は、身体をもっと細かく把握するための技術を磨くことを決意します。',
                <br />,
                '転機となったのが、O脚で5年以上にわたり、リハビリをしていて手術も勧められていた患者さんでした。積み上げた知見をもとに、施術を試みました。その時の患者さんの顔は、今でも忘れられません。',
                '「体重をかけても痛くないです！こんな体験初めてです！」',
              ]}
            />
            <AboutCard
              imageSrc={about4}
              imageAlt="about4"
              title="開業へ"
              content={[
                '喜びを共有する一方で、こんな思いも芽生えました。',
                <br />,
                '「もっと早く身体の使い方をサポートできていたら、病院に行く必要などなかったのではないか...？」「身体を守るために本当に有効な方法を広めていきたい...!」 ',
                <br />,
                '胸に去来する思いを実現させるため、2021年にFLUXUS LOCUSを開業しました。',
              ]}
            />
          </PostBody>
        </Container>
      </div>
    </>
  )
}
