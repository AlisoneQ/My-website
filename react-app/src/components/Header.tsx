function Header() {
  return (
    <header
      className="w-full flex flex-col items-center p-3"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(0, 0, 75, 0.7) 5%, rgba(0, 0, 50, 0.99))",
        height: "35vh",
      }}
      onClick={(Event) => {
        const { clientX, clientY } = Event;
        const circle = document.createElement("div");
        let radius = 1;
        let fading = 2;
        const animation = setInterval(() => {
          radius += Math.pow(1.1, 3 - radius / 50) + 1;
          fading -= 0.05;
          circle.style.cssText = `
            width: ${radius}px;
            height: ${radius}px;
            border: ${fading}px solid white;
            border-radius: 100%;
            position: absolute;
            left: ${clientX - radius / 2}px;
            top: ${clientY - radius / 2}px;
            z-index: 1;
            opacity: ${fading / 2};
          `;
          document.body.appendChild(circle);
          if (fading <= 0) {
            circle.remove();
            clearInterval(animation);
          }
        }, 10);
      }}
    >
      <nav
        className="border-2 rounded-lg border-white h-fit w-fit text-l p-2 text-white fixed backdrop-blur-md flex gap-1"
        style={{ content: "🏠" }}
      >
        <a href="">Home</a>
      </nav>
    </header>
  );
}

export default Header;
