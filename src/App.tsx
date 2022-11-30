import * as React from "react";
import { Tab, Tabs } from "components";
import { TABS_MOCKS } from "constants/common";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(TABS_MOCKS[0].label);
  const handleChangeTab = (tab: string) => setActiveTab(tab);
  console.log(TABS_MOCKS.map((item) => item));

  return (
    <main>
      <Tabs onChange={handleChangeTab}>
        {TABS_MOCKS.map(item => (
          <Tab id={item.key} label={item.label} activeTab={activeTab} key={item.key}>
            <div>{item.children}</div>
          </Tab>
        ))}
      </Tabs>
    </main>
  );
};

export default App;
