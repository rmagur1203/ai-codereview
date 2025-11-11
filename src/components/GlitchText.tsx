interface GlitchTextProps {
  text: string
}

const GlitchText = ({ text }: GlitchTextProps) => {
  return (
    <h1
      className="glitch-text text-5xl md:text-6xl font-bold uppercase relative text-white tracking-[0.3rem] mb-2 animate-glitch"
      data-text={text}
    >
      {text}
    </h1>
  )
}

export default GlitchText

