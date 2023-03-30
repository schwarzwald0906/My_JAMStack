import style from 'styles/topPageFigure.module.css'

export default function TopPageFigure() {
  return (
    <>
      <div className={style.container}>
        <div className={style.circle}>
          <span> {['神経系や', <br />, 'インナーの不調']}</span>
        </div>
        <div className={style.triangle}></div>
        <div className={style.circle}>
          <span>身体の歪み</span>
        </div>
        <div className={style.triangle}></div>
        <div className={style.circle}>
          <span>痛み・しびれ</span>
        </div>
      </div>
    </>
  )
}
