import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`;

type TClickBlockProps = {
  isActive: boolean;
};
const ClickBlock = styled.div<TClickBlockProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 24px;

    @media (min-width: 1024px) {
      margin-right: 32px;
    }
  }

  &:hover {
    color: red;
  }

  &:after {
    position: absolute;
    content: "";
    border-bottom: ${({ isActive }) => isActive && `1px solid red`};
    width: 100%;
    transform: translateX(-50%);
    bottom: -15px;
    left: 50%;
  }
`;

const NoWrapText = styled.span`
  color: currentColor;
  white-space: nowrap;
  user-select: none;
`;

export const Styled = {
  TabsContainer,
  ClickBlock,
  NoWrapText,
};
