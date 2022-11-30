import React from "react";

type TTabsData = {
  label: string;
  key: string;
  children: string | number | React.ReactNode;
};

export const TABS_MOCKS: TTabsData[] = [
  {
    label: "cat",
    key: "item-1",
    children: "Tab first",
  },
  {
    label: "dog",
    key: "item-2",
    children: "Tab second",
  },
];
