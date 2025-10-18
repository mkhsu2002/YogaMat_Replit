import ChecklistSection from '../ChecklistSection';

export default function ChecklistSectionExample() {
  const items = [
    {
      title: "防滑性測試：",
      description: "用手輕壓表面，感受摩擦力和抓地感"
    },
    {
      title: "厚度適中：",
      description: "5-6mm提供最佳的支撐與穩定平衡"
    },
    {
      title: "尺寸合適：",
      description: "長度至少180cm，寬度60cm以上"
    },
    {
      title: "材質安全：",
      description: "選擇無毒、無異味的天然材料"
    }
  ];

  return <ChecklistSection items={items} />;
}
