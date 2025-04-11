import { ChatHistory } from "@/app/chat/chat.reducer";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ContentFiles from "./ContentFiles";
import { useTranslations } from "next-intl";

export default function UserBubble({ content }: { content: ChatHistory }) {
  const t = useTranslations();
  return (
    <article className={`flex flex-col`}>
      <h3 className={`flex text-sm text-gray-500 justify-end`}>{t("user")}</h3>
      <section className="flex justify-end">
        <data className="bg-blue-100 max-w-11/12 flex items-end flex-col gap-5 p-4 rounded-md mb-4">
          <Markdown remarkPlugins={[remarkGfm]}>{content.text}</Markdown>
          <ContentFiles files={content.files} />
        </data>
      </section>
    </article>
  );
}
