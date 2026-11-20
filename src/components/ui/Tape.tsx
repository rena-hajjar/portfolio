export default function Tape({
  color = "#F5C04A",
  className = "",
  rotate = -6,
}: {
  color?: string;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden
      className={`tape ${className}`}
      style={{ background: color, transform: `rotate(${rotate}deg)` }}
    />
  );
}
