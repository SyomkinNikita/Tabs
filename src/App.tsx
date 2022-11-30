import * as React from "react";
import { Tabs } from "components";
import { TABS_MOCKS } from "constants/common";

const App: React.FC = () => {
  return (
    <main>
      <Tabs items={TABS_MOCKS} />
    </main>
  );
};

export default App;
