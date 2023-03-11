export default function Hero({ title, subtitle, imageOn = sfalse }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}