import "./glitch.css"; // We will add a small CSS file for this

export default function GlitchText({ text }: { text: string }) {
  return (
    <h1 className="glitch-wrapper text-6xl md:text-9xl font-black tracking-tighter text-white uppercase font-display" data-text={text}>
      {text}
    </h1>
  );
}