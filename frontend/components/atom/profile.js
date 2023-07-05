import styles from 'styles/profile.module.css'
import Image from 'next/image'
import profileImage from 'public/images/topPage/profile.png'
import Container from 'components/container'
import Link from 'next/link'
export default function Profile() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.text}>
          <h4>
            「体重をかけても痛くないんです！ こんな経験は初めてしました！」
          </h4>
          <p>
            当院が生まれたきっかけは、日々施術の方法を模索するなかで、劇的な症状の改善が見られた患者さんの一言でした。
          </p>
          <p>
            自分を変えようと努力している人の役に立ちたい。そんな思いで、私は、理学療法士を目指し、リハビリを学び、本当に人に役立てる技術・知識は一体どういうものなのか、模索してきました。
          </p>
          <p>
            悩み続けて世界中の医学を学び努力をした結果、当院を創業しました。
          </p>
          <div className={styles.buttons}>
            <Link legacyBehavior href="/about">
              <a className={styles.button}>療法士紹介</a>
            </Link>
          </div>
        </div>

        <div className={styles.image}>
          <Image src={profileImage} alt="profile" width={268} height={318} />
        </div>
      </div>
    </Container>
  )
}
