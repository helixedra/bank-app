// import { useState } from "react";
// import Dropdown from "./components/Dropdown";
import { RiBankFill, RiBankCardFill, RiFundsFill, RiShieldCheckFill, RiShakeHandsFill, RiExchangeFill } from "@remixicon/react";
import classes from "./Services.module.scss";
import Button from "./../components/shared/Button";

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
  // const dropdownTestOptions = [
  //   { id: 1, name: "Option 1", action: () => handleDropdownTest(1), before: null, after: null, active: true },
  //   { id: 2, name: "Option 2", action: () => handleDropdownTest(2), before: null, after: <RiBankLine />, active: false },
  //   { id: 3, name: "Option 3", action: () => handleDropdownTest(3), before: <RiBankLine />, after: <RiBankLine />, active: false },
  // ];
  // const [dropdownTestState, setDropdownTestState] = useState({ data: dropdownTestOptions, visibility: false });

  // function handleDropdownTest(id) {
  //   // Update state
  //   setDropdownTestState((prev) => {
  //     const newData = prev.data.map((item) => (item.id === id ? { ...item, active: true } : { ...item, active: false }));
  //     const newVisibility = !prev.visibility;
  //     return { data: newData, visibility: newVisibility };
  //   });
  //   // Actions
  //   // DO SOME ACTION...
  // }

  // function toggleDropdownTest() {
  //   setDropdownTestState((prev) => {
  //     return { data: prev.data, visibility: !prev.visibility };
  //   });
  // }
  const servicesList = services.map((item) => <ServicesItem {...item} key={item.id} />);

  return (
    <main>
      <div className="container">
        <div className="row mt-6">
          <div className="col-8">
            <div className={classes.services}>
              <div className={classes.services_header}>
                <h2>Our Services</h2>
                <Button type="secondary">View All Services</Button>
              </div>
              <div className={classes.services_content}>{servicesList}</div>
            </div>
          </div>
          <div className="col-4">
            <div className={classes.promo}>
              <div className={classes.promo_header}>
                <h1>Get a Loan</h1>
                <div className={classes.promo_text}>
                  Need Extra Cash? Get a Loan
                  <br /> with Special Rates!
                </div>
              </div>
              <div className={classes.promo_footer}>
                <div>
                  <div style={{ fontSize: "32px", fontWeight: "bold" }}>5.99%</div>
                  <div style={{ fontSize: "20px" }}>Low interest rates</div>
                </div>
                <Button type="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Dropdown options={dropdownTestState} toggle={toggleDropdownTest} /> */}
    </main>
  );
}

function ServicesItem({ icon, title, description }) {
  return (
    <div className={classes.services_item}>
      <div className={classes.services_item_icon}>{icon}</div>
      <div className={classes.services_item_info}>
        <div className={classes.services_item_info_title}>{title}</div>
        <div className={classes.services_item_info_description}>{description}</div>
      </div>
    </div>
  );
}
