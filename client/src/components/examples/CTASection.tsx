import CTASection from '../CTASection';

export default function CTASectionExample() {
  return (
    <CTASection
      title="開始你的瑜珈旅程"
      description="選擇合適的瑜珈墊只是開始，真正的瑜珈之旅在於持續的練習和內在的探索。讓Horizon Urban自然正確瑜珈墊成為你這段美好旅程的可靠夥伴。"
      ctaPrimary={{
        text: "探索更多：天然橡膠麻纖維瑜珈墊",
        url: "https://www.icareushop.com.tw/page/fsc.yogamat"
      }}
      ctaSecondary={{
        text: "開啟您的綠色瑜珈之旅",
        url: "https://www.icareushop.com.tw/SalePage/Index/9171120"
      }}
      variant="highlight"
    />
  );
}
