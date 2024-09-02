import "./Sticker.css";

export default function Sticker({color,discount}) {
  return (
    <div class={`Sticker${color === 'pink'? ' pink' : color === 'green' ? ' green' : color === 'yellow' ? ' yellow' : color === 'purple' ? ' purple' : color === 'brown' ? ' brown': ''}`}>
      <h5>PINK LABELS</h5>
      <div className="white">
      <div class="discount">
        <div className="percentage">
        <p className="solid">{discount}%</p>
        <p className="outline">{discount}%</p>
        </div>
        <p className="off">OFF</p>
      </div>
      <p className="our">OUR STICKER PRICE</p>
      </div>
    </div>
  );
}
