"use client";

import CancelButton from "@/withcenter-react-components/buttons/CancelButton";
import SubmitButton from "@/withcenter-react-components/buttons/SubmitButton";
import TextButton from "@/withcenter-react-components/buttons/TextButton";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AdminPage() {
  const t = useTranslations();
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="admin page">
      <header>
        <h1>{t("admin")}</h1>
        <p>{t("admin-description")}</p>
      </header>
      <main>
        {showForm || (
          <TextButton onClick={() => setShowForm(true)}>
            {t("add-feature")}
          </TextButton>
        )}

        {showForm && (
          <form className="flex flex-col gap-3 mt-5">
            <label htmlFor="name">{t("name")}</label>
            <input type="text" id="name" name="name" required />

            <nav className="flex justify-end gap-3 mt-3">
              <CancelButton onClick={() => setShowForm(false)}>
                {t("cancel")}
              </CancelButton>
              <SubmitButton>{t("create")}</SubmitButton>
            </nav>
          </form>
        )}
      </main>
    </div>
  );
}
