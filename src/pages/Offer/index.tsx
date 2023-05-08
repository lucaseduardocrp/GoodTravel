import { ReactNode } from 'react';

import { Container } from './styles';

interface OfferProps {
  children: ReactNode;
}

export function Offer({ children }: OfferProps) {
  return (
    <Container>
      <h1>Offer</h1>
      {children}
    </Container>
  );
}
