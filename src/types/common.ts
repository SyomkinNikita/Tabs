import React, { Dispatch } from "react";

export type TTabsProps = {
  onChange: React.SetStateAction<Dispatch<string>>;
}

export type TTabsData = {
  label: string;
  key: string;
  children: string;
}[];