import CounterAnimation from "@/components/UI/CounterAnimation/CounterAnimation.component";

function SubscribersAmount() {
  return (
    <CounterAnimation
      duration={2000}
      target={6500}
      description="Wyświetleń na kanale"
      action="YouTube"
    />
  );
}

export default SubscribersAmount;
