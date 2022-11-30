import * as React from "react";
import { TTabsProps } from "types/common";
import { ReactFCC } from "types/react";

export const Tabs: ReactFCC<Pick<TTabsProps, "onChange">> = ({
  onChange,
  children
}) => {
  return (
    <div>
      <div>TABS</div>
      {children}
    </div>
  );
};
