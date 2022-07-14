import React, { CSSProperties } from "react";
import cubeStyles from "./Cube.module.css";

export interface MyCustomCSS extends CSSProperties {
  "--size": number;
  "--size-multiplier": number;
  "--radius-amount": number;
}
const BORDER_RADIUS_DIVISOR = 66;
const CONTAINER_SIZE_MULTIPLIER = 1.7;

export const Cube = ({
  size = 600,
  color = "zircon",
  backgroundColor = "transparent",
}: {
  size?: number;
  color?: string;
  backgroundColor?: string;
}) => {
  const baseStyles = {
    borderRadius: `${Math.round(size / BORDER_RADIUS_DIVISOR)}px`,
    backgroundColor: color,
  };
  return (
    <div
      id={cubeStyles.cubeWrapper}
      style={
        {
          backgroundColor,
          position: "relative",
          height: `${size * CONTAINER_SIZE_MULTIPLIER}px`,
          width: `${size * CONTAINER_SIZE_MULTIPLIER}px`,
          mixBlendMode: "screen",
          ["--size"]: size,
          ["--size-multiplier"]: CONTAINER_SIZE_MULTIPLIER,
          ["--radius-amount"]: BORDER_RADIUS_DIVISOR,
        } as MyCustomCSS
      }
    >
      <div
        id={cubeStyles.wrapper}
        style={{
          transform: "rotateX(236deg) rotateZ(-135deg)",
          width: size + "px",
          height: size + "px",
          position: "absolute",
          transformStyle: "preserve-3d",
          top: "44.5%",
          left: "20%",
        }}
      >
        <div
          style={{
            ...baseStyles,
          }}
        />
        <div
          style={{
            ...baseStyles,
            transform: `translateZ(-${size}px)`,
          }}
        />
        <div
          style={{
            ...baseStyles,
            transform: `rotateY(-90deg)`,
            transformOrigin: "right",
          }}
        />
        <div
          style={{
            ...baseStyles,
            transform: `rotateX(-90deg)`,
            transformOrigin: "top",
          }}
        />
        <div
          style={{
            ...baseStyles,
            transform: "rotateY(90deg)",
            transformOrigin: "left",
          }}
        />
        <div
          style={{
            ...baseStyles,
            transform: "rotateX(90deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>
    </div>
  );
};
