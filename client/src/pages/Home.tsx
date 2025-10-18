import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import NumberedSteps from "@/components/NumberedSteps";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import QuoteBlock from "@/components/QuoteBlock";
import CTASection from "@/components/CTASection";
import ChecklistSection from "@/components/ChecklistSection";
import { AlertCircle, CheckCircle2, TrendingUp, Shield, Leaf, Heart, Zap, Droplets } from "lucide-react";
import avatar1 from '@assets/stock_images/professional_asian_w_b877a4cf.jpg';
import avatar2 from '@assets/stock_images/professional_asian_w_91806a37.jpg';
import avatar3 from '@assets/stock_images/professional_asian_w_2c452233.jpg';
import avatar4 from '@assets/stock_images/asian_man_profession_c3cdeb08.jpg';
import avatar5 from '@assets/stock_images/asian_man_profession_e0c08a0e.jpg';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Horizon Urban 天然橡膠麻纖維瑜珈墊",
      "description": "天然橡膠材質，表層特別加上麻纖維，提供無與倫比的握力和穩定性",
      "brand": {
        "@type": "Brand",
        "name": "Horizon Urban"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://www.icareushop.com.tw/SalePage/Index/9171120"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const challenges = [
    {
      icon: AlertCircle,
      title: "選擇困惑",
      description: "市面上各種材質、厚度、品牌的瑜珈墊讓初學者眼花撩亂，不知從何下手。"
    },
    {
      icon: TrendingUp,
      title: "功能需求",
      description: "希望瑜珈墊具備基本功能和舒適度，但又擔心預算有限無法購買優質產品。"
    },
    {
      icon: AlertCircle,
      title: "品質疑慮",
      description: "擔心瑜珈墊會容易變形、不耐用，或是材質對健康造成影響。"
    }
  ];

  const advancedNeeds = [
    {
      icon: Shield,
      title: "極佳防滑性",
      description: "執行進階動作時需要卓越的抓地力，確保每個體式都能穩定完成。"
    },
    {
      icon: Droplets,
      title: "流汗不打滑",
      description: "即使大量流汗也能保持穩定，不影響練習品質和安全性。"
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "卓越抓地力",
      description: "天然橡膠的分子結構提供優異的摩擦係數，即使手腳濕潤也能牢固抓地。"
    },
    {
      icon: Leaf,
      title: "環保永續",
      description: "來自天然橡膠樹，可完全生物分解，對環境零負擔。"
    },
    {
      icon: Heart,
      title: "安全無毒",
      description: "不含有害化學物質，長期接觸也不會對健康造成影響。"
    }
  ];

  const innerBuiltFeatures = [
    {
      title: "告別額外配件",
      description: "傳統瑜珈練習中，當手腳出汗時往往需要額外的瑜珈巾來增加防滑效果。Horizon Urban 的麻纖維表層就像內建了瑜珈巾，無需額外購買和攜帶。"
    },
    {
      title: "簡化清潔流程",
      description: "不再需要分別清洗瑜珈墊和瑜珈巾，一次清潔就能完成，讓練習後的整理工作更加輕鬆。"
    }
  ];

  const thicknessGuide = [
    {
      number: "1",
      title: "3-4mm 基礎款",
      description: "適合初學者，提供基本緩衝與便於攜帶的平衡。"
    },
    {
      number: "2",
      title: "5-6mm 舒適款",
      description: "關節保護與穩定性的最佳選擇，適合大多數練習者。"
    },
    {
      number: "3",
      title: "8mm+ 療癒款",
      description: "提供最大緩衝，適合恢復性瑜珈或關節敏感者。"
    }
  ];

  const cleaningSteps = [
    {
      number: "01",
      title: "每次練習後",
      description: "用濕布輕拭表面，去除汗水和灰塵。"
    },
    {
      number: "02",
      title: "週末深度清潔",
      description: "使用溫和清潔劑全面清洗，確保衛生。"
    },
    {
      number: "03",
      title: "自然晾乾",
      description: "避免直接日曬，在通風處自然風乾。"
    },
    {
      number: "04",
      title: "妥善收納",
      description: "平放或捲起收納，避免長期折疊造成痕跡。"
    }
  ];

  const myths = [
    {
      title: "迷思一：越厚越好",
      description: "過厚的墊子會影響平衡感，5-6mm是最佳厚度選擇。"
    },
    {
      title: "迷思二：價格決定品質",
      description: "材質和工藝才是關鍵，天然橡膠性價比最高。"
    },
    {
      title: "迷思三：所有墊子都一樣",
      description: "不同材質的防滑性、耐用性差異極大。"
    }
  ];

  const yogaBasics = [
    {
      icon: Zap,
      title: "呼吸控制",
      description: "瑜珈的核心是呼吸與動作的協調。"
    },
    {
      icon: Heart,
      title: "身心平衡",
      description: "透過體式練習達到身心靈的和諧統一。"
    },
    {
      icon: TrendingUp,
      title: "循序漸進",
      description: "從基礎動作開始，逐步提升練習難度。"
    },
    {
      icon: CheckCircle2,
      title: "專注當下",
      description: "保持專注力，感受每個動作的細節。"
    }
  ];

  const practiceTimeline = [
    {
      number: "1",
      title: "第一週",
      description: "每天15-20分鐘基礎體式練習"
    },
    {
      number: "2",
      title: "第二-四週",
      description: "增加到30分鐘，加入呼吸練習"
    },
    {
      number: "3",
      title: "一個月後",
      description: "可嘗試45-60分鐘完整練習"
    },
    {
      number: "4",
      title: "三個月後",
      description: "建立穩定的練習節奏和個人風格"
    }
  ];

  const multiUse = [
    {
      title: "冥想靜坐",
      description: "提供舒適的冥想空間，幫助專注內在。"
    },
    {
      title: "伸展運動",
      description: "日常伸展和筋膜放鬆的理想選擇。"
    },
    {
      title: "居家健身",
      description: "核心訓練、皮拉提斯等運動的好夥伴。"
    }
  ];

  const commonProblems = [
    {
      title: "問題：墊子有異味",
      description: "選擇天然材質，避免化學異味困擾。定期清潔和通風晾乾。"
    },
    {
      title: "問題：練習時打滑",
      description: "天然橡膠+麻纖維表層提供最佳防滑效果，告別打滑煩惱。"
    },
    {
      title: "問題：墊子容易變形",
      description: "高密度天然橡膠確保長期使用不變形，維持平整表面。"
    }
  ];

  const safetyChecks = [
    {
      title: "練習前準備",
      description: "檢查瑜珈墊是否平整穩固、確保周圍空間充足安全、穿著合適的瑜珈服裝"
    },
    {
      title: "練習中注意",
      description: "傾聽身體訊號，避免勉強、保持穩定的呼吸節奏、利用瑜珈墊的防滑特性"
    }
  ];

  const storageSteps = [
    {
      number: "01",
      title: "清潔晾乾",
      description: "使用後務必清潔並完全晾乾再收納"
    },
    {
      number: "02",
      title: "正確捲法",
      description: "從底部開始緊密捲起，避免產生摺痕"
    },
    {
      number: "03",
      title: "固定綁帶",
      description: "使用專用綁帶或彈性繩固定瑜珈墊"
    },
    {
      number: "04",
      title: "選擇提袋",
      description: "搭配透氣性良好的瑜珈墊提袋"
    }
  ];

  const quickFAQs = [
    {
      title: "Q: 多久需要更換瑜珈墊？",
      description: "優質天然橡膠瑜珈墊可使用5年以上，視使用頻率而定。"
    },
    {
      title: "Q: 可以用普通墊子代替嗎？",
      description: "專業瑜珈墊的防滑和支撐特性是普通墊子無法替代的。"
    },
    {
      title: "Q: 天然橡膠會過敏嗎？",
      description: "極少數人對天然橡膠敏感，購買前可先諮詢專業建議。"
    }
  ];

  const sustainableLifestyle = [
    {
      title: "循環利用",
      description: "選擇可回收材質的瑜珈用品"
    },
    {
      title: "節水清潔",
      description: "使用環保清潔方式保養器材"
    },
    {
      title: "綠色出行",
      description: "步行或騎車前往瑜珈教室"
    },
    {
      title: "正念消費",
      description: "購買真正需要的高品質產品"
    },
    {
      title: "分享推廣",
      description: "向朋友推薦環保瑜珈理念"
    }
  ];

  const healthBenefits = [
    {
      title: "穩定基礎",
      description: "支撐平衡姿勢，提升專注與動作安全"
    },
    {
      title: "安全防護",
      description: "減少滑動與衝擊，降低受傷風險"
    },
    {
      title: "舒適體驗",
      description: "緩衝壓力，促進放鬆與持久練習"
    },
    {
      title: "身心健康連鎖",
      description: "提升專注、減壓並促進整體福祉"
    }
  ];

  const finalChecklist = [
    {
      title: "材質確認",
      description: "天然橡膠+麻纖維，無毒環保認證"
    },
    {
      title: "功能測試",
      description: "防滑性、緩衝性、穩定性達標"
    },
    {
      title: "尺寸適合",
      description: "長度寬度符合個人需求"
    },
    {
      title: "價格合理",
      description: "性價比高，符合預算規劃"
    },
    {
      title: "售後保障",
      description: "品牌信譽良好，提供品質保證"
    }
  ];

  const purchaseChecklist = [
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
    },
    {
      title: "清潔容易：",
      description: "表面易於清潔且快速乾燥"
    },
    {
      title: "重量考量：",
      description: "便於攜帶但不失穩定性"
    }
  ];

  const materialHeaders = ["材質類型", "防滑性", "環保性", "耐用度", "價格"];
  const materialRows = [
    { "材質類型": "PVC塑膠", "防滑性": "普通", "環保性": "低", "耐用度": "中等", "價格": "低" },
    { "材質類型": "TPE材質", "防滑性": "中等", "環保性": "中等", "耐用度": "中等", "價格": "中等" },
    { "材質類型": "天然橡膠", "防滑性": "優異", "環保性": "高", "耐用度": "優異", "價格": "中高" }
  ];

  const yogaStyleHeaders = ["瑜珈流派", "推薦厚度", "防滑需求", "特殊考量"];
  const yogaStyleRows = [
    { "瑜珈流派": "哈達瑜珈", "推薦厚度": "6mm", "防滑需求": "中等", "特殊考量": "舒適度優先" },
    { "瑜珈流派": "流瑜珈", "推薦厚度": "5mm", "防滑需求": "高", "特殊考量": "防滑性重要" },
    { "瑜珈流派": "熱瑜珈", "推薦厚度": "4mm", "防滑需求": "極高", "特殊考量": "快乾材質必需" },
    { "瑜珈流派": "恢復性瑜珈", "推薦厚度": "8mm", "防滑需求": "中等", "特殊考量": "厚度與軟度" }
  ];

  const detailedFAQs = [
    {
      question: "瑜伽墊的厚度有什麼差別？",
      answer: "3-4mm：輕薄，適合需要經常攜帶，或喜歡與地面有較多連結感的練習者，例如平衡動作。5-6mm：大部分人的通用選擇，提供足夠的緩衝和穩定性，適合大多數瑜伽流派。8mm以上：較厚，提供更好的緩衝，適合膝蓋、手腕等關節敏感的人，但也可能影響平衡動作的穩定性。"
    },
    {
      question: "瑜伽墊的材質有哪些？",
      answer: "PVC（聚氯乙烯）：經濟實惠，耐用，但環保性較差。TPE（熱塑性彈性體）：輕量、環保、無毒，回彈性好，是目前很受歡迎的材質。天然橡膠：防滑性極佳，抓地力強，但較重，且有些許橡膠味，不適合對橡膠過敏者。PU（聚氨酯）+橡膠：PU表層防滑性超強，即使流汗也不滑，是許多進階練習者的首選。"
    },
    {
      question: "為什麼有些瑜伽墊很滑？",
      answer: "這通常與材質和表面紋路有關。天然橡膠和PU表層的防滑性較好。如果你的手腳容易流汗，建議選擇PU+橡膠材質，或是在練習時準備一條吸汗巾。"
    },
    {
      question: "瑜伽墊的尺寸怎麼選？",
      answer: "一般尺寸為 173cm x 61cm 或 183cm x 61cm。建議選擇比自己身高長 5-10 公分的瑜伽墊，確保在平躺或伸展時，身體的大部分都能在墊子上。"
    },
    {
      question: "如何清潔瑜伽墊？",
      answer: "每次練習後，可以用中性清潔劑稀釋後擦拭，或購買專用瑜伽墊清潔噴霧。擦拭完畢後，將墊子平放陰乾，避免陽光直射或高溫，以免墊子變形或老化。"
    },
    {
      question: "新手適合哪種瑜伽墊？",
      answer: "新手可以從TPE材質、厚度 5-6mm 的瑜伽墊開始。這種墊子價格適中、輕量、環保且具備足夠的緩衝性，是很好的入門選擇。"
    },
    {
      question: "瑜伽墊的價格差異很大，是越貴越好嗎？",
      answer: "不一定。價格通常反映了材質、品牌和設計。高品質的墊子在防滑、緩衝和耐用性上通常表現更好，但這並不代表便宜的墊子就不好。你可以根據自己的預算和需求來做選擇。"
    },
    {
      question: "可以把瑜伽墊當作一般運動墊使用嗎？",
      answer: "可以，但請注意，瑜伽墊的設計主要是為了瑜伽動作，強調的是防滑、穩定性。如果你要做跳躍等高衝擊動作，可能需要額外的保護，例如更厚的運動墊。"
    },
    {
      question: "瑜伽墊壽命有多長？",
      answer: "這取決於材質和使用頻率。一般來說，TPE或PVC材質的墊子可以用1-2年，天然橡膠或PU材質的墊子則更耐用，可以達到數年。當你發現墊子開始變滑、邊緣裂開或無法提供足夠的緩衝時，就是該換新墊子的時候了。"
    },
    {
      question: "購買瑜伽墊時，有沒有什麼細節要注意？",
      answer: "除了厚度、材質和尺寸，你還可以注意墊子的重量，如果需要經常攜帶，選擇輕量的會更方便。另外，也可以聞聞看有沒有刺鼻的異味，確保材質是安全的。"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="瑜珈進階關鍵：一張自然正確的瑜伽墊，確保姿勢正確穩紮"
        subtitle="踏入瑜珈世界的第一步，往往從選擇一張合適的瑜珈墊開始。但面對市場上琳瑯滿目的選擇，你是否感到困惑？讓我們一起探索如何為你的瑜珈練習找到最完美的夥伴。"
        ctaPrimary={{
          text: "探索更多：天然橡膠麻纖維瑜珈墊",
          url: "https://www.icareushop.com.tw/page/fsc.yogamat"
        }}
        ctaSecondary={{
          text: "開啟您的綠色瑜珈之旅",
          url: "https://www.icareushop.com.tw/SalePage/Index/9171120"
        }}
      />

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="為什麼瑜珈墊如此重要？"
            subtitle="瑜珈墊不僅僅是一塊墊子，它是你練習的基石。一張好的瑜珈墊能提供必要的支撐、防滑功能，並確保練習時的安全與舒適度。對於初學者而言，選擇適合的瑜珈墊更是建立信心與維持練習動機的關鍵因素。"
            centered={true}
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈愛好者進階面臨的三大挑戰"
            centered={true}
          />
          <FeatureGrid features={challenges} columns={3} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="進階練習者的專業需求"
            centered={true}
          />
          <FeatureGrid features={advancedNeeds} columns={2} />
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="環保意識者的永續追求"
            subtitle="現代瑜珈愛好者越來越重視環保與永續性。他們希望瑜珈墊不僅功能卓越，更要對地球友善。天然材質、無毒製程、可回收特性，都是綠色生活實踐者的重要考量。"
            centered={true}
          />
          <div className="text-center mt-8">
            <p className="text-lg text-foreground font-medium">
              選擇環保瑜珈墊，不僅是對自己健康的投資，更是對地球未來的承諾。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="認識 Horizon Urban 自然正確瑜珈墊"
            subtitle="Horizon Urban 自然正確瑜珈墊採用天然橡膠材質，表層特別加上麻纖維，提供無與倫比的握力和穩定性。這不僅僅是一張瑜珈墊，更像是擁有內建的瑜珈巾功能，完美結合了功能性與環保理念。"
            centered={true}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="https://www.icareushop.com.tw/page/fsc.yogamat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                探索更多：天然橡膠麻纖維瑜珈墊
              </button>
            </a>
            <a 
              href="https://www.icareushop.com.tw/SalePage/Index/9171120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-background border border-border text-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                開啟您的綠色瑜珈之旅
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="天然橡膠的科學優勢"
            centered={true}
          />
          <FeatureGrid features={advantages} columns={3} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="麻纖維表層的獨特魅力"
            subtitle="麻纖維作為表層材質，不僅提供了天然的抗菌特性，更重要的是其獨特的紋理結構能有效增加摩擦力。這種天然纖維具有優異的吸濕排汗能力，確保練習過程中始終保持乾爽舒適。"
            centered={true}
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="天然麻纖維表層｜內建瑜伽巾的創新設計"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {innerBuiltFeatures.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="https://www.icareushop.com.tw/page/fsc.yogamat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                探索更多：天然橡膠麻纖維瑜珈墊
              </button>
            </a>
            <a 
              href="https://www.icareushop.com.tw/SalePage/Index/9171120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-background border border-border text-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                開啟您的綠色瑜珈之旅
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊厚度選擇指南"
            centered={true}
          />
          <NumberedSteps steps={thicknessGuide} columns={3} />
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="材質比較：為什麼選擇天然橡膠？"
            centered={true}
          />
          <div className="mt-8">
            <ComparisonTable 
              headers={materialHeaders} 
              rows={materialRows}
              highlightColumn={0}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊正確選購清單"
            centered={true}
          />
          <div className="mt-8 max-w-3xl mx-auto">
            <ChecklistSection items={purchaseChecklist} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊清潔保養秘訣"
            centered={true}
          />
          <NumberedSteps steps={cleaningSteps} columns={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="常見瑜珈墊迷思破解"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {myths.map((myth, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{myth.title}</h3>
                <p className="text-muted-foreground">{myth.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈入門必知的基本概念"
            centered={true}
          />
          <FeatureGrid features={yogaBasics} columns={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="建立健康生活的瑜珈習慣"
            subtitle="瑜珈不僅是運動，更是一種生活方式。透過規律的練習，我們能建立與身體的深度連結，培養內在的平靜與力量。選擇一張優質的瑜珈墊，就是為這段美好旅程奠定堅實的基礎。"
            centered={true}
          />
          <div className="flex justify-center mt-8">
            <a 
              href="https://www.icareushop.com.tw/SalePage/Index/9171120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                開啟您的綠色瑜珈之旅
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="新手瑜珈練習時間建議"
            centered={true}
          />
          <NumberedSteps steps={practiceTimeline} columns={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊的多功能運用"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {multiUse.map((use, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{use.title}</h3>
                <p className="text-muted-foreground">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="環保瑜珈的深層意義"
            centered={true}
          />
          <QuoteBlock quote="瑜珈教導我們與萬物和諧共處，選擇環保瑜珈墊正是這一理念的具體實踐。" />
          <p className="text-lg text-muted-foreground text-center leading-relaxed mt-6">
            當我們選擇天然橡膠和麻纖維製作的瑜珈墊時，不僅照顧了自己的健康，也表達了對地球的關愛。這種選擇體現了瑜珈「不傷害」的核心價值觀。
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="解決瑜珈墊常見問題"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {commonProblems.map((problem, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈練習安全注意事項"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {safetyChecks.map((check, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{check.title}</h3>
                <p className="text-muted-foreground">{check.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊挑選常見問題解答FAQ"
            centered={true}
          />
          <div className="mt-8 max-w-4xl mx-auto">
            <FAQAccordion faqs={detailedFAQs} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊收納與攜帶技巧"
            centered={true}
          />
          <NumberedSteps steps={storageSteps} columns={4} />
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈初學者FAQ解答"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {quickFAQs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-base font-bold text-foreground mb-3">{faq.title}</h3>
                <p className="text-muted-foreground text-sm">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="不同瑜珈流派的墊子需求"
            centered={true}
          />
          <div className="mt-8">
            <ComparisonTable 
              headers={yogaStyleHeaders} 
              rows={yogaStyleRows}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="真實用戶體驗分享"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <TestimonialCard
              quote="使用Horizon Urban瑜珈墊三個月了，防滑效果真的很棒！即使做高難度動作也很穩定。"
              author="Linda"
              role="瑜珈老師"
              avatarUrl={avatar1}
            />
            <TestimonialCard
              quote="作為環保主義者，我很滿意這款天然橡膠瑜珈墊。材質天然，沒有異味，品質很讚！"
              author="Kevin"
              role="上班族"
              avatarUrl={avatar4}
            />
            <TestimonialCard
              quote="麻纖維表層真的很特別，流汗後也不會滑，而且清潔起來超方便。強烈推薦給所有瑜珈愛好者！"
              author="Sarah"
              role="瑜珈愛好者"
              avatarUrl={avatar2}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="建立個人瑜珈空間"
            subtitle="創造一個專屬的瑜珈練習空間能大大提升練習品質。選擇光線良好、空氣流通的區域，鋪上你的Horizon Urban天然瑜珈墊，添加一些綠植和柔和的音樂，就能打造出理想的練習環境。"
            centered={true}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="https://www.icareushop.com.tw/page/fsc.yogamat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                探索更多：天然橡膠麻纖維瑜珈墊
              </button>
            </a>
            <a 
              href="https://www.icareushop.com.tw/SalePage/Index/9171120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-background border border-border text-foreground rounded-md font-medium hover-elevate active-elevate-2 min-w-[200px]">
                開啟您的綠色瑜珈之旅
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊與身心健康的關聯"
            centered={true}
          />
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">瑜珈墊如何促進身心健康</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                  <h4 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="永續瑜珈生活方式"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {sustainableLifestyle.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="瑜珈墊選購最終檢查清單"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {finalChecklist.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="開始你的瑜珈旅程"
        description="選擇合適的瑜珈墊只是開始，真正的瑜珈之旅在於持續的練習和內在的探索。讓Horizon Urban自然正確瑜珈墊成為你這段美好旅程的可靠夥伴，在每一次練習中感受身心的成長與蛻變。"
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

      <footer className="bg-card py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Horizon Urban 瑜珈墊. 探索天然、環保、高品質的瑜珈練習體驗。
          </p>
        </div>
      </footer>
    </div>
  );
}
