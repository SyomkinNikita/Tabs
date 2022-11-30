import * as React from "react";
import { TTabsData } from "types/common";
import { ReactFCC } from "types/react";

type TTabsProps = {
  items: TTabsData;
};

export const Tabs: ReactFCC<TTabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = React.useState(items[0].label);
  const handleChangeTab = (tab: string) => setActiveTab(tab);
  console.log(items.map((item) => item));
  return (
    <div>
      <div>TABS</div>
    </div>
  );
};
