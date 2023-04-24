import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
  '/images/topPage/customer1.jpg',
  '/images/topPage/customer2.jpg',
  '/images/topPage/customer3.jpg',
  '/images/topPage/customer4.jpg',
]

export default function SlideShow() {
  return (
    <div className={"showOnlyMobile"}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
    </div>
  )
}
