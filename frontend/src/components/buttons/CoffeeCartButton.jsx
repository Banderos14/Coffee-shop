import React, { useEffect, useRef } from "react";
import "./coffeeButton.css";

export default function CoffeeCartButton({ label = "Add to cart", onAdd }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    if (!button || !window.gsap) return;

    const gsap = window.gsap;
    const MorphSVGPlugin = window.MorphSVGPlugin;
    if (MorphSVGPlugin) gsap.registerPlugin(MorphSVGPlugin);

    const morphWave = button.querySelector(".morph path");

    // Сжимаем кнопку при pointerdown — как у оригинала
    const onDown = () => {
      if (button.classList.contains("active")) return;
      gsap.to(button, { "--background-scale": 0.97, duration: 0.15 });
    };

    const onClick = (e) => {
      e.preventDefault();
      if (button.classList.contains("active")) return;
      button.classList.add("active");

      // 1) Пружинка кнопки (вниз → вверх)
      gsap.to(button, {
        keyframes: [
          { "--background-scale": 0.97, duration: 0.15 },
          { "--background-scale": 1, delay: 0.125, duration: 1.2, ease: "elastic.out(1,.6)" },
        ],
      });

      // 2) Движение стакана (прыжок вверх → вниз в корзину → исчез)
      gsap.to(button, {
        keyframes: [
          { "--shirt-scale": 1, "--shirt-y": "-42px", duration: 0.4, ease: "power1.in" },
          { "--shirt-y": "-40px", duration: 0.3 },
          { "--shirt-y": "16px", "--shirt-scale": 0.9, duration: 0.25, ease: "none" },
          { "--shirt-scale": 0, duration: 0.3, ease: "none" },
        ],
      });
      gsap.to(button, { "--shirt-second-y": "0px", delay: 0.835, duration: 0.12 });

      // 3) Тележка: видна изначально слева, делает «подъезд», «тик», уезжает вправо и возвращается на место
      const tlCart = gsap.timeline();

      tlCart
        .to(button, { "--text-o": 0, duration: 0.3 }, 0.0) // текст плавно скрыть
        .to(
          button,
          { "--cart-clip": "12px", "--cart-clip-x": "3px", duration: 0.06 },
          0.9
        )
        .to(button, { "--cart-y": "2px", duration: 0.1 }, ">")
        .to(
          button,
          {
            "--cart-tick-offset": "0px",
            "--cart-y": "0px",
            duration: 0.2,
            onStart() {
              button.style.overflow = "hidden";
            },
          },
          ">"
        )
        .to(button, { "--cart-x": "52px", "--cart-rotate": "-15deg", duration: 0.2 }, ">")
        .to(button, { "--cart-x": "104px", "--cart-rotate": "0deg", duration: 0.2 }, ">")
        // Возвращаем тележку и текст в исходные значения (видна слева, маленькая)
        .to(
          button,
          { "--cart-x": "-48px", "--cart-scale": 0.75, duration: 0.001 },
          ">"
        )
        .to(button, { "--text-o": 1, "--text-x": "12px", duration: 0.25 }, ">")
        .add(() => {
          button.classList.remove("active");
          if (typeof onAdd === "function") onAdd();
        });

      // 4) Волна снизу (morph) — как у оригинала
      if (MorphSVGPlugin && morphWave) {
        gsap.to(morphWave, {
          keyframes: [
            {
              morphSVG:
                "M0 12C6 12 20 10 32 0C43.9024 9.99999 58 12 64 12V13H0V12Z",
              duration: 0.25,
              ease: "power1.out",
            },
            {
              morphSVG:
                "M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z",
              duration: 0.15,
              ease: "none",
            },
          ],
        });
      }
    };

    button.addEventListener("pointerdown", onDown);
    button.addEventListener("click", onClick);
    return () => {
      button.removeEventListener("pointerdown", onDown);
      button.removeEventListener("click", onClick);
    };
  }, [onAdd]);

  return (
    <button ref={btnRef} className="add-to-cart" type="button">
      <span>{label}</span>

      {/* волна */}
      <svg className="morph" viewBox="0 0 64 13" aria-hidden="true">
        <path d="M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z" />
      </svg>

      {/* стакан (2 кадра, как в исходнике) */}
      <div className="shirt" aria-hidden="true">
        <svg className="first" viewBox="0 0 24 24">
          <path d="M3 5h18v2H3z" />
          <path d="M6 7h12l-1.7 14a1 1 0 0 1-1 .9H8.7a1 1 0 0 1-1-.9L6 7z" />
          <path d="M7.8 11h8.4v4H7.8z" />
        </svg>
        <svg className="second" viewBox="0 0 24 24">
          <path d="M3 5h18v2H3z" />
          <path d="M6 7h12l-1.7 14a1 1 0 0 1-1 .9H8.7a1 1 0 0 1-1-.9L6 7z" />
          <path d="M7.8 11h8.4v4H7.8z" />
        </svg>
      </div>

      {/* тележка — всегда внутри кнопки, видна слева */}
      <div className="cart" aria-hidden="true">
        <svg viewBox="0 0 36 26">
          <path d="M1 2.5H6L10 18.5H25.5L28.5 7.5L7.5 7.5" className="shape" />
          <path d="M11.5 25C12.6046 25 13.5 24.1046 13.5 23C13.5 21.8954 12.6046 21 11.5 21C10.3954 21 9.5 21.8954 9.5 23C9.5 24.1046 10.3954 25 11.5 25Z" className="wheel" />
          <path d="M24 25C25.1046 25 26 24.1046 26 23C26 21.8954 25.1046 21 24 21C22.8954 21 22 21.8954 22 23C22 24.1046 22.8954 25 24 25Z" className="wheel" />
          <path d="M14.5 13.5L16.5 15.5L21.5 10.5" className="tick" />
        </svg>
      </div>
    </button>
  );
}
