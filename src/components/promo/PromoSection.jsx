import Button from "../shared/Button";
import "./PromoSection.scss";

export default function PromoSections() {
  const promoImage = "image_21.png";
  return (
    <div
      className="block_container promo_section"
      style={{
        backgroundImage: `url('/images/${promoImage}')`,
      }}
    >
      <div className="promo_section__content">
        <div className="promo_section__content__header">
          <div className="promo_section__content__header__title">Get a Loan</div>
          <div className="promo_section__content__header__description">
            Need Extra Cash? Get a Loan <br />
            with Special Rates!
          </div>
        </div>

        <div className="promo_section__content__footer">
          <div className="promo_section__content__footer__info">
            <div className="promo_section__content__footer__info__percent">5.99%</div>
            <div className="promo_section__content__footer__info__text">Low interest rates</div>
          </div>
          <Button style="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
