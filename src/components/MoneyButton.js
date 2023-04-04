export default function MoneyButton({
  tier,
  isFilling,
  onTimerStart,
  onTimerEnd,
}) {
  const { delay } = tier;

  return (
    <button
      type="button"
      disabled={isFilling}
      onClick={() => {
        onTimerStart();
        setTimeout(() => {
          onTimerEnd();
        }, delay);
      }}
    >
      Make Money
    </button>
  );
}
