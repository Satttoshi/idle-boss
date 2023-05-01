export default function setSpeed(tierMilestoneIndex, tierIndex, tierDelay) {
  switch (tierIndex) {
    case 1:
      // Tier 1
      switch (tierMilestoneIndex) {
        case 0:
          return Math.round(tierDelay / Math.sqrt(3));
        case 1:
          return Math.round(tierDelay / Math.sqrt(3));
        case 3:
          return Math.round(tierDelay / 10);
        case 4:
          return Math.round(tierDelay / 3);
        case 5:
          return Math.round(tierDelay / 5);
        default:
          return Math.round(tierDelay / 2);
      }
    case 2:
      // Tier 2
      switch (tierMilestoneIndex) {
        case 0:
          return Math.round(tierDelay / Math.sqrt(5));
        case 1:
          return Math.round(tierDelay / Math.sqrt(5));
        case 2:
          return Math.round(tierDelay / 10);
        case 3:
          return Math.round(tierDelay / 3);
        default:
          return Math.round(tierDelay / 2);
      }
    case 3:
      // Tier 3
      switch (tierMilestoneIndex) {
        case 0:
          return Math.round(tierDelay / Math.sqrt(4));
        case 1:
          return Math.round(tierDelay / Math.sqrt(4));
        case 2:
          return Math.round(tierDelay / 8);
        case 3:
          return Math.round(tierDelay / 4);
        default:
          return Math.round(tierDelay / 2);
      }
    case 4:
      // Tier 4
      switch (tierMilestoneIndex) {
        case 0:
          return Math.round(tierDelay / Math.sqrt(2));
        case 1:
          return Math.round(tierDelay / Math.sqrt(2));
        case 3:
          return Math.round(tierDelay / 3);
        default:
          return Math.round(tierDelay / 2);
      }
    default:
      // All other tiers
      switch (tierMilestoneIndex) {
        case 0:
          return Math.round(tierDelay / Math.sqrt(1.5));
        case 1:
          return Math.round(tierDelay / Math.sqrt(1.5));
        default:
          return Math.round(tierDelay / 2);
      }
  }
}
