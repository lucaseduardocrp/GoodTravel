import { Container } from './styles';

interface CardProps{
  src: string;
  title: string;
  subtitle: string;
}

export function OfferCards({src, title, subtitle}: CardProps) {
  return (
    <Container>
        <img src={src} />
        <div className='cardInfo'>
          <h4>{title}</h4>
          <span>{subtitle}</span>
          <button className='btn2'>Book Now</button>
        </div>
    </Container>
  );
}
