import Card from "./Card";
export default function Cards({ cards }) {
  const allCards = cards.map((card) => <Card key={card.id} card={card} />);
  return <div className="card_container">{allCards}</div>;
}
