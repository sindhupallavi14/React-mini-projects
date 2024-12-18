import { Tabs } from "./Tabs";

export function TabTest() {
  function RandomComponent() {
    return <div>This is content for Tab 3</div>;
  }

  const tabs = [
    {
      label: "TAB 1",
      content: "Content from TAB 1",
    },
    {
      label: "TAB 2",
      content: "Content from TAB 2",
    },
    {
      label: "TAB 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabidx) {
    console.log(currentTabidx);
  }

  return <Tabs tabscontent={tabs} onChange={handleChange} />;
}
