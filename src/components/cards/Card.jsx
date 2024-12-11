import "./Card.scss";
export default function Card({ card }) {
  const formattedNumber = (number) => number.replace(/(.{4})/g, "$1 ");

  return (
    <div className="card_container">
      <div className={`card ${card.card_id}`}>
        <div className="card_header">
          <div className="flex items-center">
            <div className="card_pay_logo"></div>
            <div className="ml-4">{card.name}</div>
          </div>
          <div className="card_logo"></div>
        </div>
        <div className="card_number">{formattedNumber(card.card_number)}</div>

        <div className="card_info">
          <div className="card_info_holder">
            <div className="card_info_label">Name</div>
            <div className="card_info_value">Danzel Washington</div>
          </div>
          <div className="card_info_date">
            <div className="card_info_label">Valid thru</div>
            <div className="card_info_value">{card.valid_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
