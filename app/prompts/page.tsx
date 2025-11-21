// app/prompts/page.tsx
import Link from "next/link";

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-6 px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">
          お題一覧（ダミー）
        </h1>

        <p className="text-sm text-white/70">
          ここには、Aが投稿した「お題（動画／音楽など）」が並ぶ予定です。
          <br />
          今はテスト用のダミー画面です。
        </p>

        <div className="space-y-4">
          {/* サンプルお題 #1 */}
          <Link
            href="/prompts/1"
            className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
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
            className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <p className="text-xs text-white/60 mb-1">サンプルお題 #2</p>
            <h2 className="text-lg font-semibold mb-1">
              無音のAI映像に、BGMとSFXをつけてほしい
            </h2>
            <p className="text-xs text-white/70">
              音がないPVに対して、Bが音楽や効果音で「再構築」する。
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}