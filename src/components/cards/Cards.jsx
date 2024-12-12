import IconButton from "../shared/IconButton";
import Card from "./Card";
import "./Cards.scss";
import { RiAddLine } from "@remixicon/react";

export default function Cards({ cards }) {
  const allCards = cards.map((card) => <Card key={card.id} card={card} />);
  return (
    <div className="block_container all_cards">
      <div className="all_cards__container">
        <div className="all_cards__header">
          <h2>My Cards</h2>
          <IconButton style={"secondary"} icon={<RiAddLine />} />
        </div>
        <div className="all_cards__cards_stack">{allCards}</div>
      </div>
    </div>
  );
}
