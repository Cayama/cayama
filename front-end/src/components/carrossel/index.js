import Carousel from 'react-bootstrap/Carousel'
import { CarouselImage } from './styles';

const tutorialSteps = [
  'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
];

const CarrosselComponent = ({ carrosselImageArray }) => {
  return (
    <Carousel>
      {carrosselImageArray.map((src, index) => (
        <Carousel.Item key={index} interval={3500}>
          <CarouselImage
            className="d-block w-100"
            src={src}
            alt="Carrossel Image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export { CarrosselComponent, tutorialSteps };
