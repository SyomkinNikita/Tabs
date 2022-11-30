import * as React from "react";
import { TTabsData } from "types/common";
import { ReactFCC } from "types/react";
import { Styled } from "./styled";

type TTabsProps = {
  items: TTabsData;
};

export const Tabs: ReactFCC<TTabsProps> = ({ items }) => {
  const [tabLabelWithActive, setTabLabelWithActive] = React.useState(
    items[0].key
  );

  const getTabClickHandler = (key: string) => {
    setTabLabelWithActive(key);
  };

  return (
    <>
      <Styled.TabsContainer>
        {items.map(({ key, label }) => (
          <Styled.ClickBlock
            isActive={tabLabelWithActive === key}
            key={key}
            onClick={() => getTabClickHandler(key)}
          >
            <Styled.NoWrapText>{label}</Styled.NoWrapText>
          </Styled.ClickBlock>
        ))}
      </Styled.TabsContainer>
      {items.map((item) => {
        if (item.key === tabLabelWithActive) {
          return <div>{item.children}</div>;
        }
      })}
    </>
  );
};
