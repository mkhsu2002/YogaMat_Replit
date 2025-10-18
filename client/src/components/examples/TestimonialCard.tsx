import TestimonialCard from '../TestimonialCard';
import avatar1 from '@assets/stock_images/professional_asian_w_b877a4cf.jpg';

export default function TestimonialCardExample() {
  return (
    <TestimonialCard
      quote="使用Horizon Urban瑜珈墊三個月了，防滑效果真的很棒！即使做高難度動作也很穩定。"
      author="Linda"
      role="瑜珈老師"
      avatarUrl={avatar1}
    />
  );
}
