import React from "react";
// import TalktoAstroguruProfie1 from "../Components/TalktoAstroguruProfie/TalktoAstroguruProfie1";
// import Profile from "../Components/TalktoAstroguruProfie/TalktoAstroguruProfie1";
import Profile2 from "../Components/AstroguruProfiles/Profile2";
import Profile1 from "../Components/AstroguruProfiles/Profile1";
import "../CSS/TalktoAstroguru.css";

function TalktoAstroguru() {
  return (
    <>
      <div className="TalktoAstroguruclassname-main">
        <Profile1 />
        <>
          <Profile2 />
        </>
      </div>
    </>
  );
}

export default TalktoAstroguru;
