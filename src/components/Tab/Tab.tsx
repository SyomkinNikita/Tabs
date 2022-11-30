import * as React from "react";
import { TTabsProps } from "types/common";
import { ReactFCC } from "types/react";

export const Tab: ReactFCC<Omit<TTabsProps, "onChange">> = ({
  id,
  label,
  activeTab,
}) => {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  );
};
