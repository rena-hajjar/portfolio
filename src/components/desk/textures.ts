import * as THREE from "three";

// Placeholder "photo" textures drawn on a canvas. When real photos are
// ready, swap each one for: new THREE.TextureLoader().load("/desk/xyz.webp")

type Draw = (x: CanvasRenderingContext2D, w: number, h: number) => void;

export function canvasTexture(w: number, h: number, draw: Draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

const DISPLAY = '"Rubik Mono One", system-ui, sans-serif';
const HAND = '"Rubik Variable", system-ui, sans-serif';
const PAL = ["#7840E5", "#3B7FD9", "#6570E6", "#F29A3A", "#16B583", "#E2557F"];

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export const wood: Draw = (x, w, h) => {
  x.fillStyle = "#D6AE80";
  x.fillRect(0, 0, w, h);
  const r = rand(7);
  for (let i = 0; i < 140; i++) {
    const y = r() * h;
    x.strokeStyle = `rgba(${135 + r() * 40},${85 + r() * 25},${40 + r() * 15},${0.1 + r() * 0.2})`;
    x.lineWidth = 1 + r() * 4;
    x.beginPath();
    x.moveTo(0, y);
    for (let k = 0; k <= w; k += 48) x.lineTo(k, y + Math.sin(k / 160 + i) * 7);
    x.stroke();
  }
  // a couple of knots
  for (let i = 0; i < 4; i++) {
    const cx = r() * w,
      cy = r() * h;
    for (let k = 0; k < 6; k++) {
      x.strokeStyle = `rgba(120,70,30,${0.16 - k * 0.022})`;
      x.lineWidth = 2;
      x.beginPath();
      x.ellipse(cx, cy, 14 + k * 9, 5 + k * 4, 0, 0, Math.PI * 2);
      x.stroke();
    }
  }
};

export const nameCard: Draw = (x, w, h) => {
  x.fillStyle = "#F4F2FC";
  x.fillRect(0, 0, w, h);
  x.fillStyle = "#7840E5";
  x.fillRect(0, 0, w, h * 0.13);
  x.fillStyle = "#201F34";
  x.textAlign = "center";
  x.font = `400 ${h * 0.155}px ${DISPLAY}`;
  x.fillStyle = "#ABA6EC";
  x.fillText("RÉNA HAJJAR", w / 2 + h * 0.012, h * 0.56 + h * 0.012);
  x.fillStyle = "#201F34";
  x.fillText("RÉNA HAJJAR", w / 2, h * 0.56);
  x.fillStyle = "#6570E6";
  x.font = `500 ${h * 0.1}px ${HAND}`;
  x.fillText("researcher · musician · artist · traveller", w / 2, h * 0.8);
};

export const record: Draw = (x, w, h) => {
  x.fillStyle = "#18161F";
  x.fillRect(0, 0, w, h);
  x.strokeStyle = "rgba(255,255,255,.07)";
  for (let r = w * 0.2; r < w * 0.5; r += 3.2) {
    x.beginPath();
    x.arc(w / 2, h / 2, r, 0, Math.PI * 2);
    x.stroke();
  }
  // sheen
  x.fillStyle = "rgba(255,255,255,.06)";
  x.beginPath();
  x.moveTo(w / 2, h / 2);
  x.arc(w / 2, h / 2, w / 2, -0.9, -0.4);
  x.fill();
  x.fillStyle = "#F29A3A";
  x.beginPath();
  x.arc(w / 2, h / 2, w * 0.17, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#201F34";
  x.textAlign = "center";
  x.font = `600 ${w * 0.035}px ${DISPLAY}`;
  x.fillText("SIDE A", w / 2, h * 0.44);
  x.font = `600 ${w * 0.05}px ${HAND}`;
  x.fillText("music", w / 2, h * 0.6);
  x.fillStyle = "#18161F";
  x.beginPath();
  x.arc(w / 2, h / 2, w * 0.012, 0, Math.PI * 2);
  x.fill();
};

export const sketchbook: Draw = (x, w, h) => {
  x.fillStyle = "#16B583";
  x.fillRect(0, 0, w, h);
  const r = rand(3);
  for (let i = 0; i < 9; i++) {
    x.fillStyle = PAL[i % PAL.length];
    x.globalAlpha = 0.9;
    x.beginPath();
    x.ellipse(
      w * 0.18 + r() * w * 0.75,
      h * 0.15 + r() * h * 0.6,
      w * (0.05 + r() * 0.08),
      h * (0.04 + r() * 0.07),
      r() * 3,
      0,
      Math.PI * 2
    );
    x.fill();
  }
  x.globalAlpha = 1;
  x.fillStyle = "#F4F2FC";
  x.fillRect(w * 0.18, h * 0.76, w * 0.7, h * 0.15);
  x.fillStyle = "#0B7A57";
  x.textAlign = "center";
  x.font = `600 ${h * 0.12}px ${HAND}`;
  x.fillText("sketchbook", w * 0.53, h * 0.87);
  // spiral binding
  x.fillStyle = "#D8D4CC";
  for (let y = h * 0.05; y < h; y += h * 0.07) {
    x.beginPath();
    x.ellipse(w * 0.05, y, w * 0.03, h * 0.018, 0, 0, Math.PI * 2);
    x.fill();
  }
};

export const passport: Draw = (x, w, h) => {
  x.fillStyle = "#2C3A8F";
  x.fillRect(0, 0, w, h);
  x.strokeStyle = "#F5C04A";
  x.lineWidth = w * 0.025;
  const cx = w / 2,
    cy = h * 0.45,
    r = w * 0.22;
  x.beginPath();
  x.arc(cx, cy, r, 0, Math.PI * 2);
  x.stroke();
  x.beginPath();
  x.moveTo(cx - r, cy);
  x.lineTo(cx + r, cy);
  x.moveTo(cx, cy - r);
  x.lineTo(cx, cy + r);
  x.stroke();
  x.beginPath();
  x.ellipse(cx, cy, r * 0.45, r, 0, 0, Math.PI * 2);
  x.stroke();
  x.fillStyle = "#F5C04A";
  x.textAlign = "center";
  x.font = `600 ${w * 0.11}px ${DISPLAY}`;
  x.fillText("PASSPORT", cx, h * 0.18);
  x.font = `600 ${w * 0.13}px ${HAND}`;
  x.fillText("travel", cx, h * 0.83);
};

export const badge: Draw = (x, w, h) => {
  x.fillStyle = "#FFFFFF";
  x.fillRect(0, 0, w, h);
  x.fillStyle = "#6570E6";
  x.fillRect(0, 0, w, h * 0.24);
  x.fillStyle = "#FFFFFF";
  x.textAlign = "center";
  x.font = `600 ${w * 0.11}px ${DISPLAY}`;
  x.fillText("STAFF", w / 2, h * 0.16);
  x.fillStyle = "#E9E6F8";
  x.beginPath();
  x.arc(w / 2, h * 0.46, w * 0.18, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#6570E6";
  x.beginPath();
  x.arc(w / 2, h * 0.42, w * 0.07, 0, Math.PI * 2);
  x.fill();
  x.beginPath();
  x.ellipse(w / 2, h * 0.55, w * 0.12, h * 0.05, 0, Math.PI, 0);
  x.fill();
  x.fillStyle = "#201F34";
  x.font = `600 ${w * 0.12}px ${DISPLAY}`;
  x.fillText("Réna", w / 2, h * 0.74);
  x.fillStyle = "#6570E6";
  x.font = `600 ${w * 0.13}px ${HAND}`;
  x.fillText("work", w / 2, h * 0.88);
};

export const envelope: Draw = (x, w, h) => {
  x.fillStyle = "#FBE3EC";
  x.fillRect(0, 0, w, h);
  x.strokeStyle = "#E2557F";
  x.lineWidth = w * 0.012;
  x.beginPath();
  x.moveTo(0, 0);
  x.lineTo(w / 2, h * 0.55);
  x.lineTo(w, 0);
  x.stroke();
  x.fillStyle = "#E2557F";
  x.beginPath();
  x.arc(w / 2, h * 0.56, h * 0.13, 0, Math.PI * 2);
  x.fill();
  x.fillStyle = "#FBE3EC";
  x.textAlign = "center";
  x.font = `600 ${h * 0.12}px ${DISPLAY}`;
  x.fillText("R", w / 2, h * 0.6);
  x.fillStyle = "#B23A62";
  x.font = `600 ${h * 0.16}px ${HAND}`;
  x.fillText("writing — soon!", w * 0.5, h * 0.9);
  // stamp
  x.fillStyle = "#3B7FD9";
  x.fillRect(w * 0.82, h * 0.08, w * 0.12, h * 0.22);
  x.strokeStyle = "#FBE3EC";
  x.setLineDash([3, 3]);
  x.strokeRect(w * 0.83, h * 0.1, w * 0.1, h * 0.18);
};

export const coffee: Draw = (x, w, h) => {
  x.fillStyle = "#7840E5";
  x.fillRect(0, 0, w, h);
  x.fillStyle = "#4A2A12";
  x.beginPath();
  x.arc(w / 2, h / 2, w * 0.43, 0, Math.PI * 2);
  x.fill();
  x.strokeStyle = "rgba(255,240,220,.55)";
  x.lineWidth = w * 0.025;
  x.beginPath();
  x.arc(w / 2, h * 0.53, w * 0.13, 0, Math.PI * 2);
  x.stroke();
  x.beginPath();
  x.moveTo(w / 2, h * 0.53);
  x.bezierCurveTo(w * 0.42, h * 0.4, w * 0.5, h * 0.36, w / 2, h * 0.45);
  x.bezierCurveTo(w * 0.5, h * 0.36, w * 0.58, h * 0.4, w / 2, h * 0.53);
  x.stroke();
};
