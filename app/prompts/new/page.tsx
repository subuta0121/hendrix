"use client";

import { useState } from "react";

type RevenuePattern = "80_20" | "70_30" | "60_40";

export default function NewPromptPage() {
  const [title, setTitle] = useState("");
  const [direction, setDirection] = useState("");
  const [revenue, setRevenue] = useState<RevenuePattern>("70_30");
  const [useSketch, setUseSketch] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const revenueText =
      revenue === "80_20"
        ? "お題クリエイター 80% / コラボクリエイター 20%"
        : revenue === "70_30"
        ? "お題クリエイター 70% / コラボクリエイター 30%"
        : "お題クリエイター 60% / コラボクリエイター 40%";

    alert(
      [
        "※ まだデモ段階（V0）です。",
        "",
        `■ 楽曲タイトル`,
        title || "(未入力)",
        "",
        `■ 映像への要望・NG表現`,
        direction || "(未入力)",
        "",
        `■ 収益分配（お題クリエイター / コラボクリエイター）`,
        revenueText,
        "",
        `■ ソロAIスケッチを使う？`,
        useSketch ? "ON（仮PVをAIでつくる）" : "OFF（AIスケッチなし）",
      ].join("\n")
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">音楽からお題をつくる</h1>

        <p className="text-sm text-white/70 leading-relaxed">
          あなたが作った音楽を「お題」として公開し、
          映像のコラボクリエイターを募集します。
          ここでの入力内容は、まだ V0 のテスト用で実際には保存されません。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 楽曲タイトル */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              楽曲タイトル <span className="text-red-400 text-xs">（必須）</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例）夜の高速道路 - demo"
              className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>

          {/* 映像への方向性・NG表現 */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              映像に求める方向性や NG 表現があれば記載してください
            </label>
            <textarea
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              rows={5}
              placeholder={`例）\n・夜の都会の雰囲気で\n・抽象的な形やグリッチ映像OK\n・実写NG、血や暴力表現NG`}
              className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>

          {/* 収益分配パターン */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              収益分配（お題クリエイター / コラボクリエイター）
            </label>
            <p className="text-xs text-white/60">
              将来この作品が収益を生んだ場合の分配割合です。
              まずは3パターンから選べるようにしています。
            </p>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setRevenue("80_20")}
                className={
                  "flex items-center justify-between rounded-md border px-3 py-2 " +
                  (revenue === "80_20"
                    ? "border-white bg-white text-black"
                    : "border-white/20 bg-white/5 text-white/80")
                }
              >
                <span>お題クリエイター 80% / コラボクリエイター 20%</span>
                <span className="text-[10px] opacity-70">A が強め</span>
              </button>

              <button
                type="button"
                onClick={() => setRevenue("70_30")}
                className={
                  "flex items-center justify-between rounded-md border px-3 py-2 " +
                  (revenue === "70_30"
                    ? "border-white bg-white text-black"
                    : "border-white/20 bg-white/5 text-white/80")
                }
              >
                <span>お題クリエイター 70% / コラボクリエイター 30%</span>
                <span className="text-[10px] opacity-70">標準</span>
              </button>

              <button
                type="button"
                onClick={() => setRevenue("60_40")}
                className={
                  "flex items-center justify-between rounded-md border px-3 py-2 " +
                  (revenue === "60_40"
                    ? "border-white bg-white text-black"
                    : "border-white/20 bg-white/5 text-white/80")
                }
              >
                <span>お題クリエイター 60% / コラボクリエイター 40%</span>
                <span className="text-[10px] opacity-70">ほぼ共作</span>
              </button>
            </div>
          </div>

          {/* ソロAIスケッチ ON/OFF */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              ソロAIスケッチ（仮PV）の利用
            </label>
            <p className="text-xs text-white/60">
              あなたの楽曲に合わせて、AI が 30 秒程度の仮PVを自動生成します。
              現時点では、お題クリエイター本人だけが確認できるテスト機能です。
            </p>
            <button
              type="button"
              onClick={() => setUseSketch((prev) => !prev)}
              className={
                "inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium transition " +
                (useSketch
                  ? "border-white bg-white text-black"
                  : "border-white/40 bg-white/5 text-white")
              }
            >
              {useSketch ? "ON にする（AIスケッチを使う）" : "OFF にする（AIスケッチなし）"}
            </button>
          </div>

          {/* 送信ボタン（デモ） */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-full border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              この内容でお題をプレビュー（デモ）
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}