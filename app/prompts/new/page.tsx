// app/prompts/new/page.tsx
export default function NewPromptPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          お題を投稿する（ダミー）
        </h1>
        <p className="text-sm text-white/70">
          ここから A が「お題」を出します。まだ保存機能はなく、見た目だけのテスト画面です。
        </p>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-white/70">お題タイトル</label>
            <input
              className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/50"
              placeholder="例：AIで作ったピアノ曲に、映像をつけてほしい"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">お題の種類</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/50">
              <option>音楽に映像をつけてほしい（A=音楽, B=映像）</option>
              <option>映像に音楽をつけてほしい（A=映像, B=音楽）</option>
              <option>字幕・テロップをつけてほしい</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">説明（任意）</label>
            <textarea
              className="w-full rounded-lg bg白/5 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/50 min-h-[120px]"
              placeholder="作品の雰囲気やテーマ、NG事項などを書いてください。今はまだダミーで保存されません。"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-colors"
          >
            投稿する（まだ動きません・V0ダミー）
          </button>
        </form>
      </div>
    </main>
  );
}