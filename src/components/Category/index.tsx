import { IconType } from 'react-icons';
import { Container, Icon } from './styles';

interface CategoryProps {
  icon: IconType;
  title: string;
}

export function Category({ icon, title }: CategoryProps) {
  return (
    <Container> 
        {icon && <Icon>{icon}</Icon>}
        <p>{title}</p>
    </Container>
  );
}
