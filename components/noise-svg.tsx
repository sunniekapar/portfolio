export default function NoiseSVG() {
  return (
    <svg className="pointer-events-none absolute cursor-none">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
    </svg>
  );
}
