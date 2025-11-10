export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.25),_transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-teal-400/60 px-4 py-1 text-sm uppercase tracking-[0.3em] text-teal-300/80">
          Status
        </span>
        <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-6xl">
          <span className="animate-float inline-block">In Progress</span>
        </h1>
        <p className="max-w-lg text-base text-slate-300/80 sm:text-lg">
          We are busy crafting something new and wonderful. Check back soon for the grand reveal.
        </p>
      </div>
    </main>
  );
}
