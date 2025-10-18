import ComparisonTable from '../ComparisonTable';

export default function ComparisonTableExample() {
  const headers = ["材質類型", "防滑性", "環保性", "耐用度", "價格"];
  const rows = [
    { "材質類型": "PVC塑膠", "防滑性": "普通", "環保性": "低", "耐用度": "中等", "價格": "低" },
    { "材質類型": "TPE材質", "防滑性": "中等", "環保性": "中等", "耐用度": "中等", "價格": "中等" },
    { "材質類型": "天然橡膠", "防滑性": "優異", "環保性": "高", "耐用度": "優異", "價格": "中高" }
  ];

  return <ComparisonTable headers={headers} rows={rows} highlightColumn={0} />;
}
