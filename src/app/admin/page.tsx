"use client";

import {
  collection,
  addDoc,
  getFirestore,
  query,
  getDocs,
} from "firebase/firestore";
import CancelButton from "@/withcenter-react-library/buttons/CancelButton";
import SubmitButton from "@/withcenter-react-library/buttons/SubmitButton";
import TextButton from "@/withcenter-react-library/buttons/TextButton";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Feature {
  name: string;
  description: string;
}

export default function AdminPage() {
  const t = useTranslations();
  const [showForm, setShowForm] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [createLoading, setCreateLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const q = query(collection(getFirestore(), "features"));
      const querySnapshot = await getDocs(q);
      const docs: Feature[] = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        docs.push(doc.data() as Feature);
      });
      setFeatures(docs);
    })();
  }, []);

  //
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const pages = formData.get("pages") as string;
    const amount = formData.get("amount") as string;

    try {
      setCreateLoading(true);
      await addDoc(collection(getFirestore(), "features"), {
        name,
        description,
        category,
        pages,
        amount,
      });
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding document: " + error);
    } finally {
      setCreateLoading(false);
    }
  }
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
          <form className="flex flex-col  gap-3 mt-5" onSubmit={handleSubmit}>
            <label>
              {t("feature-name")}
              <input
                className="block w-full"
                type="text"
                name="name"
                required
              />
            </label>

            <label>
              {t("feature-description")}
              <textarea className="block w-full" name="description" required />
            </label>

            <label>
              {t("feature-category")}
              <input
                className="block w-full"
                type="text"
                name="category"
                required
              />
            </label>

            <label>
              {t("feature-pages")}
              <input
                className="block w-full"
                type="text"
                name="pages"
                required
              />
            </label>

            <label>
              {t("feature-amount")}
              <input
                className="block w-full"
                type="text"
                name="amount"
                required
              />
            </label>

            <nav className="flex justify-end gap-3 mt-3">
              <CancelButton
                onClick={() => setShowForm(false)}
                loading={createLoading}
              >
                {t("cancel")}
              </CancelButton>
              <SubmitButton loading={createLoading}>{t("create")}</SubmitButton>
            </nav>
          </form>
        )}

        {features.length === 0 ? (
          <p>{t("no-features")}</p>
        ) : (
          <ul>
            {features.map((feature) => (
              <li key={feature.name}>
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
