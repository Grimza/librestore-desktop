import { useTranslation } from "react-i18next";
import { Button, Input } from "../../components/ui";
import "./Login.css";

const handleSubmit = () => {
  console.log("login");
};

export function Login() {
  const { t } = useTranslation();

  return (
    <div className="login_main">
      <div className="login_brand_box">
        <img width={"13%"} height={"fit-content"} />
        <h1 className="login_brand_name">LibreStore</h1>
      </div>
      <div className="login_form">
        <h2 className="login_title">{t("auth.login.title")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="login_form_inputs">
            {/* Implement zod in the next commit :p */}
            <Input
              name="user"
              label={t("auth.login.user")}
              position="column"
              type="text"
              maxLength={30}
              className="input_medium_size"
            />
            <Input
              name="password"
              label={t("auth.login.password")}
              position="column"
              type="password"
              maxLength={100}
              className="input_medium_size"
            />
          </div>
          <div className="login_form_buttons">
            <Button type="submit" className="button_medium_size">
              {t("auth.login.signin")}
            </Button>
          </div>
        </form>
        <div className="login_forgot">
          <button className="login_forgot_button">
            {t("auth.login.forgot_password")}
          </button>
        </div>
      </div>
    </div>
  );
}
