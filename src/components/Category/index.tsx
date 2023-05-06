import { Container } from './styles';

interface CategoryProps {
  iconImage: string;
}

export function Category({ iconImage }: CategoryProps) {
  return (
    <Container> 
        <img src={iconImage} />
    </Container>
  );
}
