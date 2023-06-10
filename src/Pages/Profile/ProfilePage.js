import AppBarPage from "../AppBarPage";
import FooterPage from "../FotterPage";

import CardsPage from "./CardsPage";
import DentistPage from "./DentistPage";

function ProfilePage() {
  return (
    <>
      <AppBarPage />

      <DentistPage />
      <div style={{ margin: "2.2%" }}>
        <CardsPage />
      </div>

      <FooterPage />
    </>
  );
}

export default ProfilePage;
