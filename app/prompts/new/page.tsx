"use client";

import { useState } from "react";
import Link from "next/link";

type PromptType = "music_to_video" | "video_to_music";
type SplitOption = "80_20" | "70_30" | "60_40";

export default function NewPromptPage() {
  // ✅ ここが今回の追加：お題タイプ
  const [promptType, setPromptType] =
    useState<PromptType>("music_to_video");
  const [split, setSplit] = useState<SplitOption>("80_20");
  const [useSketch, setUseSketch] = useState(true);

  const handlePreview = () => {
    const typeLabel =
      promptType === "music_to_video"
        ? "音楽 → 映像を募集するお題（ボカロP向け）"
        : "映像 → 音楽を募集するお題";

    const splitLabel =
      split === "80_20"
        ? "お題クリエイター 80% / コラボクリエイター 20%"
        : split === "70_30"
        ? "お題クリエイター 70% / コラボクリエイター 30%"
        : "お題クリエイター 60% / コラボクリエイター 40%";

    alert(
      [
        "※ まだテスト段階（V0）です。",
        "",
        `・お題タイプ: ${typeLabel}`,
        `・収益分配: ${splitLabel}`,
        `・ソロAIスケッチ: ${useSketch ? "ON" : "OFF"}`,
        "",
        "※ 実際の保存やAI生成はまだ動きません。",
      ].join("\n")
    );
  };

  const isMusicToVideo = promptType === "music_to_video";

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
          お題をつくる（ダミー）
        </h1>
        <p className="text-sm text-white/70 mb-6">
          ここからお題クリエイターが「お題」を出します。
          まだ保存機能はなく、見た目だけのテスト画面です。
        </p>

        <form className="space-y-8">
          {/* ① お題タイプ選択 */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">お題のタイプ</p>
            <p className="text-xs text-white/60">
              まずは「音楽はある → 映像を募集」のモードからスタートします。
              「映像から音楽」は将来追加予定です。
            </p>

            <div className="grid gap-2 md:grid-cols-2">
              {/* 音楽 → 映像（有効） */}
              <button
                type="button"
                onClick={() => setPromptType("music_to_video")}
                className={
                  "rounded-xl border px-4 py-3 text-left text-xs md:text-sm transition " +
                  (isMusicToVideo
                    ? "border-white bg-white text-black"
                    : "border-white/30 hover:border-white")
                }
              >
                <p className="font-semibold mb-1">
                  音楽から映像を募集する
                </p>
                <p className="text-xs opacity-80">
                  ボカロP / トラックメイカー向け。
                  楽曲はあるが、MVやループ映像をつけてほしいとき。
                </p>
              </button>

              {/* 映像 → 音楽（Coming Soon） */}
              <button
                type="button"
                onClick={() =>
                  alert(
                    "「映像から音楽を募集する」モードは今後追加予定です。V0ではまだ使えません。"
                  )
                }
                className="rounded-xl border border-white/15 px-4 py-3 text-left text-xs md:text-sm opacity-50 cursor-not-allowed"
              >
                <p className="font-semibold mb-1">
                  映像から音楽を募集する（Coming Soon）
                </p>
                <p className="text-xs opacity-80">
                  無音の映像に、誰かがBGMや効果音をつけるモード。
                  今後のアップデートで対応予定です。
                </p>
              </button>
            </div>
          </div>

          {/* ② タイトル ＆ 希望内容：タイプによってラベルだけ変える */}
          <div className="space-y-6">
            {/* タイトル */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">
                {isMusicToVideo ? "楽曲タイトル" : "映像タイトル"}
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-black border border-white/20 px-3 py-2 text-sm"
                placeholder={
                  isMusicToVideo
                    ? "例：AIで作ったローファイ曲に、宇宙系の映像をつけてほしい"
                    : "例：AIで作ったグリッチ映像に、ビートとSFXをつけてほしい"
                }
              />
            </div>

            {/* 希望・NG */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">
                {isMusicToVideo
                  ? "映像に求める方向性・NG表現（任意）"
                  : "音楽に求める方向性・NG表現（任意）"}
              </label>
              <textarea
                className="w-full rounded-lg bg-black border border-white/20 px-3 py-2 text-sm min-h-[120px]"
                placeholder={
                  isMusicToVideo
                    ? `例）
抽象的な形やグリッチ映像OK
実写NG、血や暴力表現NG など`
                    : `例）
ローファイ／アンビエント希望
シャウト系ボーカルNG、過度に明るいアイドルソングNG など`
                }
              />
            </div>
          </div>

          {/* ③ 収益分配 */}
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-semibold">
                収益分配（お題クリエイター / コラボクリエイター）
              </p>
              <p className="text-xs text-white/60">
                将来この作品が収益を生んだ場合の分配割合です。
                まずは3パターンから選べるようにしています。
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setSplit("80_20")}
                className={
                  "w-full rounded-full border px-4 py-2 text-left text-sm transition " +
                  (split === "80_20"
                    ? "border-white bg-white text-black"
                    : "border-white/30 hover:border-white")
                }
              >
                お題クリエイター 80% / コラボクリエイター 20%
              </button>

              <button
                type="button"
                onClick={() => setSplit("70_30")}
                className={
                  "w-full rounded-full border px-4 py-2 text-left text-sm transition " +
                  (split === "70_30"
                    ? "border-white bg-white text-black"
                    : "border-white/30 hover:border-white")
                }
              >
                お題クリエイター 70% / コラボクリエイター 30%
              </button>

              <button
                type="button"
                onClick={() => setSplit("60_40")}
                className={
                  "w-full rounded-full border px-4 py-2 text-left text-sm transition " +
                  (split === "60_40"
                    ? "border-white bg-white text-black"
                    : "border-white/30 hover:border-white")
                }
              >
                お題クリエイター 60% / コラボクリエイター 40%
              </button>
            </div>
          </div>

          {/* ④ ソロAIスケッチ */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">
              ソロAIスケッチ（仮デモ）の利用
            </p>
            <p className="text-xs text-white/60">
              あなたの{isMusicToVideo ? "楽曲" : "映像"}に合わせて、
              AI が 30 秒程度の仮デモ
              {isMusicToVideo ? "PV" : "音源"}
              を自動生成します。
              現時点では、お題クリエイター本人だけが確認できるテスト機能です。
            </p>

            <button
              type="button"
              onClick={() => setUseSketch((prev) => !prev)}
              className={
                "inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium transition " +
                (useSketch
                  ? "border-white bg-white text-black"
                  : "border-white/40 text-white hover:border-white")
              }
            >
              {useSketch
                ? "ON にする（AIスケッチを使う）"
                : "OFF にする（AIスケッチなし）"}
            </button>
          </div>

          {/* ⑤ 疑似送信ボタン */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handlePreview}
              className="w-full rounded-full border border-white px-4 py-3 text-sm font-semibold hover:bg白 hover:text-black transition"
            >
              この内容でお題をプレビュー（デモ）
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}