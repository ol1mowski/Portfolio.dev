import CounterAnimation from "@/components/UI/CounterAnimation/CounterAnimation.component";

function SubscribersAmount() {
  return (
    <CounterAnimation
      target={10}
      description="Postów na moim"
      action="Blogu"
      duration={700}
      tag={'Blog'}
    />
  );
}

export default SubscribersAmount;
