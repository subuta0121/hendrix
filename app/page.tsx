"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "ja" | "en";

type Copy = {
  label: string;
  title: string;
  tagline: string;
  lead: string;
  button: string;
  sectionTitle: string;
  sectionBody: string;
  btnExplore: string;
  btnPost: string;
};

const copy: Record<Lang, Copy> = {
  ja: {
    label: "AI作成プラットフォーム",
    title: "HENDRIX", // ロゴは常に英字
    tagline: "AIクリエイションの新しい街へ。",
    lead: "音と映像が出会い、進化する場所。",
    button: "建設中（準備中のV0）",
    sectionTitle: "ヘンドリックスとは？",
    sectionBody:
      "ヘンドリックスは、AIで作られた音と映像を“街”のように集め、クリエイター同士が安全にコラボできるプラットフォームです。著作者人格権を守りながら、お題クリエイター（A）とコラボクリエイター（B）がフェアに収益とクレジットを分け合える設計を目指します。",
    btnExplore: "お題を見る（Explore）",
    btnPost: "音楽からお題をつくる（Post）",
  },
  en: {
    label: "AI CREATION PLATFORM",
    title: "HENDRIX",
    tagline: "A new city for AI creation.",
    lead: "Where sound and visuals meet and evolve.",
    button: "Under construction (preparing V0)",
    sectionTitle: "What is Hendrix?",
    sectionBody:
      "Hendrix is a platform that gathers AI-generated sound and visuals like a city, where creators can collaborate safely. We aim to protect moral rights while allowing Prompt Creators (A) and Collab Creators (B) to fairly share revenue and credit.",
    btnExplore: "Browse prompts (Explore)",
    btnPost: "Create a prompt from music (Post)",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = copy[lang];

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* 右上トグル */}
      <div className="absolute top-4 right-4">
        <div className="inline-flex rounded-full bg-white/10 p-1 text-xs">
          <button
            onClick={() => setLang("ja")}
            className={
              "px-3 py-1 rounded-full transition " +
              (lang === "ja" ? "bg-white text-black" : "text-white/70")
            }
          >
            日本語
          </button>
          <button
            onClick={() => setLang("en")}
            className={
              "px-3 py-1 rounded-full transition " +
              (lang === "en" ? "bg-white text-black" : "text-white/70")
            }
          >
            English
          </button>
        </div>
      </div>

      {/* 中央ロゴ＆キャッチ */}
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-16 text-center space-y-6">
        <p className="text-xs tracking-[0.3em] text-white/60">
          {t.label.toUpperCase()}
        </p>
        <h1 className="text-4xl md:text-5xl tracking-[0.35em] font-semibold">
          {t.title}
        </h1>
        <p className="text-sm md:text-base text-white/80">{t.tagline}</p>
        <p className="text-xs md:text-sm text-white/60">{t.lead}</p>
        <div className="pt-4">
          <button className="inline-flex items-center rounded-full border border-white/60 px-6 py-2 text-xs md:text-sm text-white/80">
            {t.button}
          </button>
        </div>
      </div>

      {/* 下部説明（トグルに連動） */}
      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-8">
        <section className="space-y-4 text-left">
          <h2 className="text-xl font-semibold">{t.sectionTitle}</h2>
          <p className="text-sm text-white/80">{t.sectionBody}</p>
        </section>

        {/* CTAボタンもトグル対応 */}
        <section className="flex flex-col md:flex-row gap-3 pt-4">
          <Link
            href="/prompts"
            className="flex-1 text-center rounded-full border border-white px-4 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            {t.btnExplore}
          </Link>
          <Link
            href="/prompts/new"
            className="flex-1 text-center rounded-full border border-white px-4 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            {t.btnPost}
          </Link>
        </section>
      </div>
    </main>
  );
}