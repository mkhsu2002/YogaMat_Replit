import FeatureGrid from '../FeatureGrid';
import { Shield, Leaf, Heart } from 'lucide-react';

export default function FeatureGridExample() {
  const features = [
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

  return <FeatureGrid features={features} columns={3} />;
}
