import React, { Dispatch } from "react";

export type TTabsProps = {
  id: string;
  label: string;
  activeTab: string;
  onChange: React.SetStateAction<Dispatch<string>>;
}
