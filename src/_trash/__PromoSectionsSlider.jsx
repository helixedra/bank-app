import Button from "../Button";

export default function PromoSectionsSlider() {
  const promoImage = "promo01.jpg";
  return (
    <div
      className="col-4 p-6 promo_section_slider"
      style={{
        backgroundImage: `url('/images/${promoImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // width: "100%",
        // height: "100%",
        // backgroundPosition: "-117px -91px",
      }}
    >
      <div>
        <div style={{ fontSize: "56px", fontWeight: "500" }}>Savings</div>
        <div>Maximise your growth</div>
        <div style={{ fontSize: "20px", marginTop: "32px", marginBottom: "72px" }}>
          <span style={{ opacity: "0.6" }}>Up to</span> 5.00%
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="secondary">Learn More</Button>
      </div>
    </div>
  );
}
