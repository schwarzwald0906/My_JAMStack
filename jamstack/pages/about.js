import Container from 'components/container'
import AboutCard from 'components/oraganism/aboutCard'
import PostBody from 'components/post-body'
import Hero from 'components/templates/hero'
import about1 from 'images/about1.jpg'
import utilStyles from 'styles/utils.module.css'

export default function About() {
  return (
    <>
      <Hero
        title="Vision"
        subtitle="「真の健康」を取り戻し、100歳まで動ける身体へ"
        imageOn
      />

      <div style={{ backgroundColor: 'var(--light-pink)' }}>
        <Container>
          <br />
          <h2 className={utilStyles.center}>創業ストーリー</h2>
          <PostBody>
            <AboutCard
              imageSrc={about1}
              imageAlt="about1"
              title="幼少期"
              content="私は小学校3年のころからバスケを始め、靭帯損傷、腰痛を始め、数多くのスポーツ障害を抱えた友人を多く目の辺りにしてきました。私自身も、中学校の頃は膝と腰を痛め、5年以上接骨院や整形外科に通い続け、痛みを緩和しては運動してすぐに痛くなる状態を繰り返していました。努力をしているのに痛みやケガのために報われない。痛みやケガを治そうとしているのに治らず同じことを繰り返す。そのような友人・自分自身を見続けた結果、治そう・良くなろうと努力をし続ける人を手伝える自分になりたいと思い理学療法士を目指すこととなりました。"
            />
            <AboutCard
              imageSrc={about1}
              imageAlt="about1"
              title="リハビリ病院で働く"
              content=" 理学療法士となりリハビリの専門病院で働き始めました。しかし、医療の世界で分かったのは「同じ治療・リハビリをしても効果が出る人と効果が出ない人に分かれてしまい、人によっては同じ苦しみを持ち続ける」ことでした。同じ薬・同じ手術・同じマッサージ・同じ筋トレをして二週間で痛みが無くなる人もいれば、一年経っても痛いままの人もいる。自分が受けてきた、5年以上治療してもすぐに元に戻ってしまうような気休め的な治療が非常に多いことを目の当たりにし続けました。
                このままでは苦しんでいる人の役に立てる自分にはなれない。一人一人の問題解決をする知識が必要だと感じました。"
            />
            <AboutCard
              imageSrc={about1}
              imageAlt="about1"
              title="試行錯誤"
              content="個別の問題に近づくため、「個性・体質」と呼ばれるような身体の構造をもっと細かく把握するための身体を触る技術を徹底的に磨きました。そうすると、一人一人、身体の深部で使えている筋肉が違うことに気づきました。見た目は同じように動いているのに、骨の付近まで触らないと分からない、深い筋肉の使い方の違いがあると。
                そして、O脚で5年以上リハビリをしていて手術を勧められている方に、分析の結果股関節の最も深くにある筋肉が使えていないと判断しそこを鍛える方法を試したら、「体重をかけても痛くないです！こんな運動初めてしました！」と衝撃的な感想をいただきました。。"
            />
            <AboutCard
              imageSrc={about1}
              imageAlt="about1"
              title="開業前"
              content="私は小学校3年のころからバスケを始め、靭帯損傷、腰痛を始め、数多くのスポーツ障害を抱えた友人を多く目の辺りにしてきました。私自身も、中学校の頃は膝と腰を痛め、5年以上接骨院や整形外科に通い続け、痛みを緩和しては運動してすぐに痛くなる状態を繰り返していました。努力をしているのに痛みやケガのために報われない。痛みやケガを治そうとしているのに治らず同じことを繰り返す。そのような友人・自分自身を見続けた結果、治そう・良くなろうと努力をし続ける人を手伝える自分になりたいと思い理学療法士を目指すこととなりました。"
            />
          </PostBody>
          <br />
        </Container>
      </div>
    </>
  )
}
