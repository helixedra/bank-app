import ImageIcon from "../ImageIcon";

export default function AccountIcon({ accounts, current = null }) {
  const icon = current ? (
    <ImageIcon image={`/images/${current.toLowerCase()}.png`} size={{ width: "24px", height: "24px" }} title={current.name} />
  ) : (
    accounts?.map((account) => {
      return <ImageIcon key={account.id} image={`/images/${account.currency.toLowerCase()}.png`} size={{ width: "24px", height: "24px" }} title={account.name} />;
    })
  );

  return <>{icon}</>;
}
