import { Container } from './styles';

interface SlideProps {
  slideImage: string;
}

export function SlideLocations({ slideImage }: SlideProps) {
  return (
    <Container> 
        <img src={slideImage} />
    </Container>
  );
}
