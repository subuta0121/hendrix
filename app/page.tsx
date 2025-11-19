// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-xs tracking-[0.25em] text-slate-400 mb-3">
          AI CREATION PLATFORM
        </div>

        <h1
          className="text-4xl md:text-6xl font-semibold tracking-[0.35em] mb-6"
          translate="no"
        >
          HENDRIX
        </h1>

        <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed">
          AIクリエイションの新しい街へ。
          <br />
          音と映像が出会い、進化する場所。
        </p>

        <button
          className="px-6 py-3 text-sm md:text-base rounded-full border border-slate-500/70 hover:border-slate-200 transition-colors"
        >
          まだ工事中です（V0 準備中）
        </button>
      </div>
    </main>
  );
}