// app/page.tsx
"use client";

import { useState } from "react";

type Lang = "ja" | "en";

const copy: Record<Lang, { label: string; title: string; tagline: string; lead: string; button: string }> = {
  ja: {
    label: "AI作成プラットフォーム",
    title: "HENDRIX",
    tagline: "AIクリエイションの新しい街へ。",
    lead: "音と映像が出会い、進化する場所。",
    button: "まだ工事中です（V0 準備中）",
  },
  en: {
    label: "AI Creation Platform",
    title: "HENDRIX",
    tagline: "A new city for AI creation.",
    lead: "Where sound and visuals meet and evolve.",
    button: "Under construction (preparing V0)",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");

  const t = copy[lang];

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* 言語切り替えトグル */}
        <div className="flex justify-end mb-4">
          <div className="inline-flex items-center rounded-full bg-white/10 p-1 text-xs">
            <button
              onClick={() => setLang("ja")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "ja" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "en" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* ロゴ & テキスト */}
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
          {t.label}
        </p>
        <h1 className="text-5xl md:text-6xl tracking-[0.35em] font-semibold">
          {t.title}
        </h1>
        <div className="space-y-2 text-sm md:text-base text-white/80 mt-4">
          <p>{t.tagline}</p>
          <p>{t.lead}</p>
        </div>

        {/* ボタン（ダミー） */}
        <div className="pt-6">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2 text-xs md:text-sm tracking-wide text-white/80 hover:bg-white hover:text-black transition"
          >
            {t.button}
          </button>
        </div>
      </div>
    </main>
  );
}