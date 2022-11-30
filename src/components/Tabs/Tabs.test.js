import React from "react";
import { render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";

const TABS_MOCKS = [
  { label: "Tab 1", key: "item-1", children: "Content 1" },
  { label: "Tab 2", key: "item-2", children: "Content 2" },
];

desbribe("Tabs", () => {
  beforeAll(() => {
    <Tabs items={TABS_MOCKS} />;
  });
  test("test", () => {
    expect(screen.toBeVisible);
  });
});
