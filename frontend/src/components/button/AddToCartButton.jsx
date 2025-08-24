import { useState } from "react";

/**
 * AddToCartButton — анимация как в CodePen:
 * cart (svg) заезжает слева → cup падает в cart → cart уезжает → "Added!" → возврат.
 */
export default function AddToCartButton({
  label = "Add to cart",
  onAdd = async () => {},
  disabled = false,
  successMs = 1400, // длительность показа "Added!" + анимации
}) {
  const [anim, setAnim] = useState(false);   // запустить анимацию
  const [added, setAdded] = useState(false); // показать "Added!"

  async function handleClick() {
    if (disabled || anim) return;
    setAnim(true);
    try {
      await onAdd();
      setAdded(true);
    } finally {
      // вернуть исходный вид после цикла анимации
      setTimeout(() => {
        setAdded(false);
        setAnim(false);
      }, successMs);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || anim}
      aria-live="polite"
      className={`add2cart-btn ${anim ? "is-animating" : ""} ${added ? "is-added" : ""} ${
        disabled ? "is-disabled" : ""
      }`}
    >
      {/* Текстовые слои */}
      <span className="add2cart-label add2cart-label--idle">{label}</span>
      <span className="add2cart-label add2cart-label--added">Added!</span>

      {/* Сцена анимации */}
      <span className="add2cart-stage" aria-hidden="true">
        {/* Тележка */}
        <svg
          className="add2cart-cart"
          viewBox="0 0 64 48"
          width="56"
          height="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* корзина */}
          <path d="M10 10h6l6 20h22a4 4 0 0 0 3.7-2.5L55 16H22" />
          {/* ручка */}
          <path d="M10 10L6 6" />
          {/* колёса */}
          <circle cx="26" cy="38" r="3" fill="currentColor" />
          <circle cx="42" cy="38" r="3" fill="currentColor" />
        </svg>

        {/* Чашка кофе (падает в корзину) */}
        <svg
          className="add2cart-cup"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
        >
          {/* steam */}
          <path d="M6 2h2v2H6zM10 2h2v2h-2zM14 2h2v2h-2z" />
          {/* cup */}
          <path d="M18 8h1a4 4 0 0 1 0 8h-1v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8h14Zm1 6a2 2 0 0 0 0-4h-1v4h1Z" />
        </svg>
      </span>
    </button>
  );
}
