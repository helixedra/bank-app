export default function ImageIcon({ image, size, title }) {
  return (
    <img src={image} alt={title} width={size.width} height={size.height} />
  );
}
