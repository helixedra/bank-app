import { useState, useEffect } from "react";
export default function Amount({ currentAccount }) {
  // Numbers Animations
  const [displayedAmount, setDisplayedAmount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 150;
    const finalAmount = currentAccount.amount;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentValue = Math.min((progress / duration) * finalAmount, finalAmount);
      setDisplayedAmount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [currentAccount.amount]);
  return (
    <>
      <span className="accounts_amount__symbol">{currentAccount && currentAccount.symbol}</span>
      {new Intl.NumberFormat("en-IN").format(displayedAmount.toFixed(2))}
    </>
  );
}
