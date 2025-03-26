const LETTERS = [
  {
    letter: "C",
    color: "#C62828",
  },
  {
    letter: "o",
    color: "#FFA000",
  },
  {
    letter: "c",
    color: "#388E3C",
  },
  {
    letter: "k",
    color: "#1976D2",
  },
  {
    letter: "t",
    color: "#7B1FA2",
  },
  {
    letter: "a",
    color: "#D32F2F",
  },
  {
    letter: "i",
    color: "#F57C00",
  },
  {
    letter: "l",
    color: "#2E7D32",
  },
  {
    letter: "s",
    color: "#0288D1",
  },
];

export const HeroTitle = () => {
  return LETTERS.map((letter, index) => (
    <span
      key={index}
      className="text-[64px] sm:text-[80px] md:text-[100px] uppercase font-Oswald tracking-wider"
      style={{
        WebkitTextStrokeColor: letter.color,
        WebkitTextStrokeWidth: 3,
      }}
    >
      {letter.letter}
    </span>
  ));
};
