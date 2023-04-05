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

export default function About() {
  return (
    <>
      <div style={{ backgroundColor: 'var(--light-pink)' }}>
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
                '私は小学校3年生の頃からバスケを始めました。しかし、周りには靭帯損傷や腰痛、多数のスポーツ障害を抱えた友人がたくさんいました。自分自身も中学校の頃には膝や腰を痛め、5年以上も接骨院や整形外科に通い続け、痛みを和らげては運動してすぐに痛くなるという状況を繰り返しました。',
                <br />,
                '努力しているのに痛みやケガに悩まされて成果が出せない、治そうとしているのに上手くいかないという経験を自分自身や友人が繰り返しているのを見て、私もそんな人たちを手助けできる理学療法士になりたいと思うようになりました。',
              ]}
            />
            <AboutCard
              imageSrc={about2}
              imageAlt="about2"
              title="リハビリ病院で働く"
              content={[
                '私は、専門病院で理学療法士として働き始めました。その経験から分かったのは、「同じ治療やリハビリをしても、効果が出る人と出ない人がいることで、同じ苦しみを持ち続ける人もいる」ということでした。同じ薬・手術・マッサージ・筋トレをしても、二週間で痛みが消える人もいれば、一年たっても痛いままの人もいるのです。そして、私自身も治療をしてもすぐに元に戻ってしまうような気休め的な治療が非常に多いことに気づきました。',
                <br />,
                'このままでは、苦しんでいる人たちを助けることはできないと感じました。一人ひとりの問題に合わせた対応が必要だったのです。',
              ]}
            />
            <AboutCard
              imageSrc={about3}
              imageAlt="about3"
              title="試行錯誤"
              content={[
                '個別の問題に近づくために、身体の構造をもっと細かく把握するための身体を触る技術を徹底的に磨きました。そうすると、一人一人の身体の深部で使われている筋肉が違うことに気づきました。見た目は同じように動いているのに、骨の付近まで触らないと分からない、深い筋肉の使い方の違いがある、と。',
                <br />,
                '転機となったのが、O脚で5年以上にわたり、リハビリをしていて手術も勧められていた患者さんでした。分析の結果、股関節の最深部の筋肉が使えていないと判断しました。積み上げた知見をもとに、施術を試みました。その時の患者さんの顔は、今でも忘れられません。',
                <br />,
                '「体重をかけても痛くないです！こんな体験初めてです！」',
              ]}
            />
            <AboutCard
              imageSrc={about4}
              imageAlt="about4"
              title="開業へ"
              content={[
                ' 効果的な運動ができたことに喜びを共有する一方で、悩みも生まれました。',
                <br />,
                '「もし運動を膝が変形する前に始めていたら、膝を変形させずに済んだのではないか...？」「もっと早く正しい身体の使い方を身につけていたら、病院に行く必要がなかったのではないか...？」 ',
                <br />,
                '実は、個人の個性や体質、年齢の問題とされることが多い身体の問題は、細かな筋肉の使い方の違いや、正しい身体の使い方をしていないことが大きな原因となっています。そこで、私は身体を守るために本当に有効な方法を広めていきたいと思い、2021年にFLUXUS LOCUSを開業しました。',
              ]}
            />
          </PostBody>
        </Container>
      </div>
    </>
  )
}
