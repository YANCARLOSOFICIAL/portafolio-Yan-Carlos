export default function BlurOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Blue blur orb - top left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/30 rounded-full blur-[100px] animate-float"
        style={{ animationDuration: '8s', animationDelay: '0s' }}
      />

      {/* Purple blur orb - top right */}
      <div
        className="absolute top-20 right-0 w-80 h-80 bg-accent-purple/25 rounded-full blur-[98px] animate-float"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />

      {/* Cyan blur orb - bottom left */}
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[74px] animate-float"
        style={{ animationDuration: '12s', animationDelay: '4s' }}
      />

      {/* Blue blur orb - bottom right */}
      <div
        className="absolute bottom-20 right-1/3 w-64 h-64 bg-accent-blue/20 rounded-full blur-[90px] animate-float"
        style={{ animationDuration: '9s', animationDelay: '1s' }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
