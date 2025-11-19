"use client";

import { useState } from "react";

type Lang = "ja" | "en";

type Copy = {
  label: string;
  tagline: string;
  lead: string;
  button: string;
};

const title = "HENDRIX";

const copy: Record<Lang, Copy> = {
  ja: {
    label: "AI作成プラットフォーム",
    tagline: "AI創造のための新しい都市。",
    lead: "音と映像が出会い、進化する場所。",
    button: "建設中（準備中のV0）",
  },
  en: {
    label: "AI CREATION PLATFORM",
    tagline: "A new city for AI creation.",
    lead: "Where sound and visuals meet and evolve.",
    button: "Under construction (preparing V0)",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = copy[lang];

  return (
    <main className="relative min-h-screen bg-black text-white px-4 py-10">
      {/* 画面右上の言語トグル */}
      <div className="absolute top-6 right-6">
        <div className="inline-flex rounded-full bg-white/10 p-1 text-xs sm:text-sm">
          <button
            onClick={() => setLang("ja")}
            className={`px-3 py-1 rounded-full transition ${
              lang === "ja"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            日本語
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-full transition ${
              lang === "en"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* 上半分：メインビジュアル */}
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl w-full text-center space-y-6">
          {/* ラベルだけ切り替え */}
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60">
            {t.label}
          </div>

          {/* タイトルは常に HENDRIX */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.35em]">
            {title}
          </h1>

          {/* 説明は切り替え */}
          <p className="text-sm sm:text-base text-white/80 mt-4">
            {t.tagline}
            <br />
            {t.lead}
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 rounded-full border border-white/40 text-sm sm:text-base hover:bg-white hover:text-black transition">
              {t.button}
            </button>
          </div>
        </div>
      </div>

      {/* 下半分：ヘンドリックスとは？説明セクション */}
      <section className="max-w-3xl mx-auto mt-8 space-y-6">
        <div className="space-y-3 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {lang === "ja" ? "ヘンドリックスとは？" : "What is Hendrix?"}
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {lang === "ja"
              ? "ヘンドリックスは、AIで作られた音と映像を“街”のように集め、クリエイター同士が安全にコラボできるプラットフォームです。著作者人格権を守りながら、A（お題主）とB（貢献者）がフェアに収益とクレジットを分け合える設計を目指します。"
              : "Hendrix is a platform where AI-generated sound and visuals gather like a new city. It is designed so that creators can collaborate safely, protecting moral rights while A (prompt owner) and B (contributors) share revenue and credit fairly."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 text-sm sm:text-base">
          <div className="border border-white/15 rounded-2xl p-4 bg-white/5">
            <h3 className="font-semibold mb-2">
              {lang === "ja" ? "① 人格権ファースト" : "1. Moral rights first"}
            </h3>
            <p className="text-white/80">
              {lang === "ja"
                ? "応募作品はデフォルト非公開。Aが「公式採用／スピンオフ／不採用」を選んでから初めて世に出ます。"
                : "Submissions stay private by default. Only after A chooses “Official”, “Spin-off”, or “Reject” will they be shown to the world."}
            </p>
          </div>

          <div className="border border-white/15 rounded-2xl p-4 bg-white/5">
            <h3 className="font-semibold mb-2">
              {lang === "ja"
                ? "② ウォレットではなく債務管理"
                : "2. No wallet, only payouts"}
            </h3>
            <p className="text-white/80">
              {lang === "ja"
                ? "ユーザーからのチャージや送金機能は持たず、プラットフォームからクリエイターへの“未払報酬”としてだけ管理します。"
                : "No top-up or peer-to-peer transfers. We only manage unpaid rewards that Hendrix owes to each creator."}
            </p>
          </div>

          <div className="border border-white/15 rounded-2xl p-4 bg-white/5">
            <h3 className="font-semibold mb-2">
              {lang === "ja" ? "③ V0 は「街の看板」" : "3. V0 is a signboard"}
            </h3>
            <p className="text-white/80">
              {lang === "ja"
                ? "最初のバージョンでは、ビジョンとルールをシンプルに公開し、少人数のクリエイターと一緒に実験を始めます。"
                : "In the first version, we simply show the vision and core rules, and start small experiments with a few creators."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}