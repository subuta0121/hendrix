"use client";

import Link from "next/link";

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
        {/* トップへ戻る */}
        <div className="mb-4">
          <Link href="/" className="text-sm underline">
            ← トップへ戻る
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          お題一覧（ダミー）
        </h1>
        <p className="text-sm text-white/70">
          ここには、お題クリエイターが出した「お題（動画／音楽など）」が
          並ぶ予定です。いまはテスト用のダミー画面です。
        </p>

        <div className="space-y-4 mt-6">
          {/* サンプルお題 #1 */}
          <Link
            href="/prompts/1"
            className="block rounded-xl border border-white/20 px-4 py-3 hover:border-white/60 transition"
          >
            <p className="text-xs text-white/60 mb-1">サンプルお題 #1</p>
            <h2 className="text-lg font-semibold mb-1">
              宇宙ローファイビートのPVを作ってほしい
            </h2>
            <p className="text-xs text-white/70">
              AがアップロードしたAI音楽に、誰かが映像をつけてほしい。
            </p>
          </Link>

          {/* サンプルお題 #2 */}
          <Link
            href="/prompts/2"
            className="block rounded-xl border border-white/20 px-4 py-3 hover:border-white/60 transition"
          >
            <p className="text-xs text-white/60 mb-1">サンプルお題 #2</p>
            <h2 className="text-lg font-semibold mb-1">
              無音のAI映像に、BGMとSFXをつけてほしい
            </h2>
            <p className="text-xs text-white/70">
              音がないPVに対して、Bが音楽や効果音で「再構築」するお題。
            </p>
          </Link>
        </div>

        {/* お題を出すリンク（ダミー） */}
        <div className="pt-4">
          <Link
            href="/prompts/new"
            className="inline-flex items-center rounded-full border border-white px-4 py-2 text-xs md:text-sm hover:bg-white hover:text-black transition"
          >
            ＋ 音楽からお題をつくる（ダミー）
          </Link>
        </div>
      </div>
    </main>
  );
}