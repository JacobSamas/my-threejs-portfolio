export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-deep-gradient">
      <h1 className="text-5xl font-bold text-lightSeafoam animate-bounce">
        Welcome to the Deep Sea
      </h1>
      <p className="mt-4 text-xl text-coralRed">Explore the unknown beneath the waves.</p>
      <a
        href="#"
        className="mt-6 px-6 py-3 bg-waveGreen text-deepSeaBlue font-bold rounded-lg hover:bg-coralRed transition"
      >
        Dive In
      </a>
    </div>
  );
}
