import NumberedSteps from '../NumberedSteps';

export default function NumberedStepsExample() {
  const steps = [
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

  return <NumberedSteps steps={steps} columns={4} />;
}
