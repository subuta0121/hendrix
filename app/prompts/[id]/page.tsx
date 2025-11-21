import Link from "next/link";

type PromptDetail = {
  title: string;
  type: string;
  description: string;
};

const dummyPrompts: Record<string, PromptDetail> = {
  "1": {
    title: "宇宙ローファイビートのPVを作ってほしい",
    type: "音楽に映像をつけてほしい（A=音楽、B=映像）",
    description:
      "AがアップロードしたAI音楽に、誰かが映像をつけてほしい、というサンプルお題です。",
  },
  "2": {
    title: "無音のAI映像に、BGMとSFXをつけてほしい",
    type: "映像に音をつけてほしい（A=映像、B=音）",
    description:
      "音がないAI映像に対して、Bが音楽や効果音で『再構築』するサンプルお題です。",
  },
};

type PageProps = {
  params: { id: string };
};

export default function PromptDetailPage({ params }: PageProps) {
  const prompt = dummyPrompts[params.id];

  if (!prompt) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-semibold">お題が見つかりませんでした</h1>
          <p className="text-sm text-white/70">
            このIDのお題は、まだダミーデータに登録されていません。
          </p>
          <Link
            href="/prompts"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/40 text-sm hover:bg-white hover:text-black transition"
          >
            ← お題一覧に戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-xs text-white/60">お題ID: {params.id}</p>

        <h1 className="text-2xl md:text-3xl font-semibold">{prompt.title}</h1>

        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold">お題の種類</p>
          <p>{prompt.type}</p>
        </div>

        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold">説明（ダミー）</p>
          <p>{prompt.description}</p>
        </div>

        <div className="pt-8">
          <Link
            href="/prompts"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/40 text-sm hover:bg-white hover:text-black transition"
          >
            ← お題一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}