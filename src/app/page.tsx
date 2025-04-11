"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const t = useTranslations();

  // Navigate to chat with a specific type
  function openChat({ type }: { type: string }) {
    router.push(`/chat?type=${encodeURIComponent(type)}`);
  }

  // Handle form submission for custom prompts
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prompt = formData.get("prompt") as string;

    if (prompt.trim()) {
      router.push(`/chat?ask=${encodeURIComponent(prompt)}`);
    }
  }

  return (
    <div className="home page">
      <header className="flex gap-5 items-center justify-between p-4 bg-gray-800 text-white">
        <h1>{t("app-name")}</h1>
        <aside>
          <Link href="/upload-test">Uplaod</Link>
          <Link className="h2" href="/admin">
            {t("admin")}
          </Link>
        </aside>
      </header>
      <main className="flex flex-col gap-5 p-5">
        <h2>{t("welcome")}</h2>
        <h3>{t("what-do-you-want-to-build")}</h3>
        <h2>{t("choose-what-you-want-to-build")}</h2>

        <nav className="flex gap-3">
          <button onClick={() => openChat({ type: "forum-app" })}>
            {t("forum-app")}
          </button>
          <button onClick={() => openChat({ type: "chat-app" })}>
            {t("chat-app")}
          </button>
          <button onClick={() => openChat({ type: "shopping-mall-app" })}>
            {t("shopping-mall")}
          </button>
          <button onClick={() => openChat({ type: "game-app" })}>
            {t("game-app")}
          </button>
          <button onClick={() => openChat({ type: "fitness-app" })}>
            {t("fitness-app")}
          </button>
        </nav>

        <section className="mt-12">
          <h3 className="h3">{t("or-write-down-your-needs")}</h3>
          <form
            onSubmit={onSubmit}
            method="post"
            className="flex flex-col gap-4"
          >
            <input
              name="prompt"
              type="text"
              placeholder={t("write-your-needs-here")}
              className="border p-2 rounded"
            />
            <button className="bg-blue-500 text-white p-2 rounded">
              {t("send")}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
