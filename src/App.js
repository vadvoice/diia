import "./styles.scss";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

import ReactModal from "react-modal";
// pages
import { Home } from "./routes/Home/Home";
import { Notifications } from "./routes/Notifications/Notifications";
// components
import { Header } from "./library/Header/Header";
import { Footer } from "./library/Footer/Footer";
import classNames from "classnames";

export default function App() {
  ReactModal.setAppElement("#modal-portal");
  let [searchParams] = useSearchParams();

  return (
    <div
      className={classNames(
        "App",
        `App-${searchParams.get("documentType") || "PASS"}`,
        {
          "App-blur": searchParams.get("isModalOpened")
        }
      )}
    >
      <Header />
      {/* TODO: HOC */}
      <div className="App-page-container">
        <Routes>
          <Route path="/diia" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
