import * as React from "react";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import { RecoilRoot } from "recoil";
import AuthenticatedApp from "./authenticated-app";

function App() {
  return (
    <RecoilRoot>
      <ThemeConfig>
        <GlobalStyles />
        <AuthenticatedApp />
      </ThemeConfig>
    </RecoilRoot>
  );
}
export default App;
