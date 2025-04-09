import Footer from "@/components/Footer";
import SubmitButton from "@/withcenter-react-components/buttons/SubmitButton";
import { useTranslations } from "next-intl";

export default function AdminPage() {
  const t = useTranslations();
  return (
    <div className="admin page">
      <header>
        <h1>관리자 화면</h1>
        <p>각 기능별 설정을 관리 할 수 있습니다.</p>
      </header>
      <main>
        <form>
          <SubmitButton>{t("create")}</SubmitButton>
        </form>
      </main>
      <Footer />
    </div>
  );
}
