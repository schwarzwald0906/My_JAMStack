import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  '/images/customer.png',
  '/images/customer1.png',
  '/images/customer2.png',
  '/images/customer3.png',
]

export default function SlideShow() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      style={{ width: '333px', height: '333px' }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            // style={{ width: '25%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </Carousel>
  )
}
