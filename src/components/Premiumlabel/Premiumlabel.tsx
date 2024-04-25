type PremiumLabelpporps = {
  isPremium: boolean;
  classnamePrefix: 'place-card' | 'offer';
}

function PremiumLabel({ isPremium, classnamePrefix }: PremiumLabelpporps) {
  return (
    isPremium &&
    <div className={`${classnamePrefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;
