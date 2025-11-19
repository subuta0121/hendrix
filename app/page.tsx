"use client";

import { useState } from "react";

type Lang = "ja" | "en";

type Copy = {
  label: string;
  title: string;
  tagline: string;
  lead: string;
  button: string;
};

const copy: Record<Lang, Copy> = {
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
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* 画面右上固定の言語トグル */}
      <div className="absolute top-4 right-4">
        <div className="inline-flex rounded-full bg-white/10 p-1 text-xs">
          <button
            onClick={() => setLang("ja")}
            className={`px-3 py-1 rounded-full font-semibold ${
              lang === "ja"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            日本語
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-full font-semibold ${
              lang === "en"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* 中央コンテンツ */}
      <div className="max-w-xl w-full text-center space-y-8">
        <p className="tracking-[0.3em] text-xs text-white/60">{t.label}</p>

        {/* ロゴは常に HENDRIX（言語に関係なく固定） */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-[0.2em]">
          HENDRIX
        </h1>

        <p className="text-sm md:text-base text-white/80">{t.tagline}</p>
        <p className="text-xs md:text-sm text-white/60">{t.lead}</p>

        <div className="pt-6">
          <button className="inline-flex items-center px-6 py-3 rounded-full border border-white/40 text-xs tracking-wide hover:bg-white hover:text-black transition-colors">
            {t.button}
          </button>
        </div>
      </div>
    </main>
  );
}