import { RiBankFill, RiBankCardFill, RiFundsFill, RiShieldCheckFill, RiShakeHandsFill, RiExchangeFill } from "@remixicon/react";
import "./Services.scss";
// import Button from "./../components/shared/Button";
// import PromoSections from "../components/promo/PromoSection";
import Button from "../components/shared/Button";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <RiBankFill />,
      title: "Accounts & Deposits",
      description: "Open current and savings accounts, term deposits, and more.",
    },
    {
      id: 2,
      icon: <RiBankCardFill />,
      title: "Credit Products",
      description: "Consumer loans, mortgages, and credit cards tailored to your needs.",
    },
    {
      id: 3,
      icon: <RiFundsFill />,
      title: "Investments",
      description: "Access bonds, stocks, and investment accounts for your financial growth.",
    },
    {
      id: 4,
      icon: <RiShieldCheckFill />,
      title: "Insurance Services",
      description: "Life, property, and travel insurance to protect what matters most.",
    },
    {
      id: 5,
      icon: <RiShakeHandsFill />,
      title: "Business Banking",
      description: "Tailored financial solutions for businesses of all sizes.",
    },
    {
      id: 6,
      icon: <RiExchangeFill />,
      title: "Currency Exchange",
      description: "Competitive rates for foreign currency transactions.",
    },
  ];

  const servicesList = services.map((item) => <ServicesItem {...item} key={item.id} />);

  const promoImage = "image_21.png";

  return (
    <div className="services_wrapper">
      <div className="block_container services">
        {/* <div className="services__header">
          <h2>Our Services</h2>
          <Button style="secondary">View All</Button>
        </div> */}
        <div className="services__content">{servicesList}</div>
      </div>

      <div
        className="block_container promo"
        style={{
          backgroundImage: `url('/images/${promoImage}')`,
        }}
      >
        <div className="promo__content">
          <div className="promo__content__header">
            <div className="promo__content__header__title">Get a Loan</div>
            <div className="promo__content__header__description">
              Need Extra Cash? Get a Loan <br />
              with Special Rates!
            </div>
          </div>

          <div className="promo__content__footer">
            <div className="promo__content__footer__info">
              <div className="promo__content__footer__info__percent">5.99%</div>
              <div className="promo__content__footer__info__text">Low interest rates</div>
            </div>
            <Button style="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesItem({ icon, title, description }) {
  return (
    <div className="services__item">
      <div className="services__item__icon">{icon}</div>
      <div className="services__item__info">
        <div className="services__item__info__title">{title}</div>
        <div className="services__item__info__description">{description}</div>
      </div>
    </div>
  );
}
