import React from 'react'
import Hero from 'components/hero'
import Container from 'components/container'

export default function Home() {
  return (
    <Container>
      <Hero
        title="整形外科や整骨院に行っても完治しなかった方
  身体のパフォーマンスを向上させたい方"
        subtitle="あなたの思いを叶える施術院が、ここ桜木町にあります"
        imageOn
      />
    </Container>
  )
}
