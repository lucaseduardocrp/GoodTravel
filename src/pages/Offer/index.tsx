import { OfferCards } from '../../components/OfferCards';
import { Container } from './styles';

export function Offer() {
  return (
    <Container>
      <h3>Offer</h3>

      <div className="offerSlide">
        <OfferCards src='../../../public/offer2' title='text ever since the 1500s, when ' subtitle='it to make a type specimen book.'/>
        <OfferCards src='../../../public/offer2' title='text ever since the 1500s, when ' subtitle='it to make a type specimen book.'/>
        <OfferCards src='../../public/offer2' title='text ever since the 1500s, when ' subtitle='it to make a type specimen book.'/>
      </div>
    </Container>
  );
}
