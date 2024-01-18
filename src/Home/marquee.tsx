const items = [
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },

  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
  {
    name: "Sophia Martinez",
  },
];

export default function Marquee() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#111" }}
      className="relative flex  w-screen items-center"
    >
      <div
        style={{ width: "100%" }}
        className="relative flex max-w-[100vw] overflow-hidden "
      >
        <div
          style={{
            gap: "20px",
          }}
          className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index}>
              <div
                style={{
                  margin: "10px 30px",
                  width: "100%",
                  color: "#fff",
                  fontSize: "18px",
                  minWidth: "120px",
                }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
