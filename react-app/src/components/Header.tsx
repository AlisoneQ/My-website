function Header() {
  return (
    <header className="flex flex-col items-center">
      <canvas
        id="title"
        className="w-full p-0 m-0 size-full"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0, 0, 75, 0.7) 5%, rgba(0, 0, 50, 0.99), rgba(0, 0, 0, 0.9))",
          height: "35vh",
        }}
      ></canvas>
      <nav className="border-2 rounded-lg border-white h-fit w-fit text-sm p-2 text-white fixed backdrop-blur-md flex gap-1 top-0 m-2">
        <a href="" style={{ content: "🏠" }}>
          Home
        </a>
      </nav>
    </header>
  );
}

export default Header;
