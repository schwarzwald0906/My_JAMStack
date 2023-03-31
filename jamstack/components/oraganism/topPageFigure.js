import style from 'styles/topPageFigure.module.css'

export default function TopPageFigure() {
  return (
    <>
      <div className={style.container}>
        <div className={style.brownCircle}>
          <span> {['神経系や', <br />, 'インナーの不調']}</span>
        </div>
        <div className={style.triangle}></div>
        <div className={style.pinkBrownCircle}>
          <span>身体の歪み</span>
        </div>
        <div className={style.triangle}></div>
        <div className={style.pinkRedCircle}>
          <span>痛み・しびれ</span>
        </div>
      </div>
      <div className={style.whiteRectangle}>
        <span>他院の施術</span>
      </div>
      <div className={style.yellowRectangle}>
        <span>FLUXUS LOCUSの施術</span>
      </div>
    </>
  )
}
