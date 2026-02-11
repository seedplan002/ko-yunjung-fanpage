"use client";

import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function FanMessage() {
  const [messages] = useState([
    {
      name: "영희",
      date: "2024.03",
      message:
        "윤정님의 연기를 보면 항상 마음이 따뜻해져요. 앞으로도 좋은 작품 많이 보여주세요!",
    },
    {
      name: "민수",
      date: "2024.02",
      message:
        "환혼에서의 연기가 정말 인상깊었어요. 진부연 역할 완벽했습니다!",
    },
    {
      name: "수진",
      date: "2024.01",
      message:
        "무빙 정말 재밌게 봤어요! 액션 연기도 너무 잘하시더라고요. 앞으로의 행보가 기대됩니다.",
    },
    {
      name: "준호",
      date: "2023.12",
      message:
        "고윤정 배우님 팬이 된 지 2년째! 매 작품마다 성장하는 모습이 너무 멋져요.",
    },
  ]);

  const [nickname, setNickname] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  // Lower threshold (0.1) for messages list to trigger animation earlier
  const { ref: messagesRef, isVisible: messagesVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim() && text.trim()) {
      setSubmitted(true);
      setNickname("");
      setText("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`mb-20 text-center scroll-hidden ${titleVisible ? "scroll-visible" : ""}`}
        >
          <span className="mb-4 inline-block text-xs tracking-[0.4em] text-[#c9a87c]/60 uppercase">
            Fan Messages
          </span>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            <span className="gradient-text">팬 메시지</span>
          </h2>
          <p className="mt-4 text-sm text-[#f5f0eb]/40">
            고윤정 배우에게 응원의 메시지를 남겨주세요
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Messages */}
          <div ref={messagesRef} className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`rounded-xl border border-[#c9a87c]/10 bg-[#141414]/60 p-5 transition-all duration-300 hover:border-[#c9a87c]/20 hover:-translate-y-0.5 scroll-hidden-left ${messagesVisible ? "scroll-visible-x" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#c9a87c]/80">
                    {msg.name}
                  </span>
                  <span className="text-xs text-[#f5f0eb]/30">{msg.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#f5f0eb]/60 font-light">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className={`flex items-start scroll-hidden-right ${formVisible ? "scroll-visible-x" : ""}`}
          >
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-xl border border-[#c9a87c]/10 bg-[#141414]/60 p-8"
            >
              <h3 className="mb-6 text-lg font-light text-[#f5f0eb]/80">
                메시지 남기기
              </h3>

              <div className="mb-5">
                <label
                  htmlFor="nickname"
                  className="mb-2 block text-xs tracking-widest text-[#c9a87c]/60 uppercase"
                >
                  닉네임
                </label>
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="닉네임을 입력하세요"
                  className="w-full rounded-lg border border-[#c9a87c]/10 bg-[#0a0a0a]/60 px-4 py-3 text-sm text-[#f5f0eb]/80 placeholder-[#f5f0eb]/20 outline-none transition-colors focus:border-[#c9a87c]/40"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs tracking-widest text-[#c9a87c]/60 uppercase"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="응원 메시지를 남겨주세요"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#c9a87c]/10 bg-[#0a0a0a]/60 px-4 py-3 text-sm text-[#f5f0eb]/80 placeholder-[#f5f0eb]/20 outline-none transition-colors focus:border-[#c9a87c]/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#c9a87c]/20 py-3 text-sm tracking-widest text-[#c9a87c] uppercase transition-all duration-300 hover:bg-[#c9a87c]/30 hover:shadow-lg hover:shadow-[#c9a87c]/10"
              >
                전송하기
              </button>

              {submitted && (
                <p className="mt-4 text-center text-sm text-[#c9a87c]/80 animate-fade-in">
                  메시지가 전송되었습니다! 감사합니다.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
