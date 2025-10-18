import FAQAccordion from '../FAQAccordion';

export default function FAQAccordionExample() {
  const faqs = [
    {
      question: "瑜伽墊的厚度有什麼差別？",
      answer: "3-4mm：輕薄，適合需要經常攜帶，或喜歡與地面有較多連結感的練習者，例如平衡動作。5-6mm：大部分人的通用選擇，提供足夠的緩衝和穩定性，適合大多數瑜伽流派。8mm以上：較厚，提供更好的緩衝，適合膝蓋、手腕等關節敏感的人。"
    },
    {
      question: "瑜伽墊的材質有哪些？",
      answer: "PVC（聚氯乙烯）：經濟實惠，耐用，但環保性較差。TPE（熱塑性彈性體）：輕量、環保、無毒，回彈性好。天然橡膠：防滑性極佳，抓地力強，但較重。PU+橡膠：PU表層防滑性超強，即使流汗也不滑。"
    },
    {
      question: "如何清潔瑜伽墊？",
      answer: "每次練習後，可以用中性清潔劑稀釋後擦拭，或購買專用瑜伽墊清潔噴霧。擦拭完畢後，將墊子平放陰乾，避免陽光直射或高溫，以免墊子變形或老化。"
    }
  ];

  return <FAQAccordion faqs={faqs} />;
}
