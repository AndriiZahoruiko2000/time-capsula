export function msToTime(ms: number) {
  const totalSeconds = Math.round(ms / 1000);
  const totalMinutes = Math.round(totalSeconds / 60);
  const totalHours = Math.round(totalMinutes / 60);
  const totalDays = Math.round(totalHours / 24);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const minutes = String(totalMinutes % 60).padStart(2, "0");
  const hours = String(totalHours % 24).padStart(2, "0");
  const days = String(totalDays % 99).padStart(2, "0");
  return `${days}:${hours}:${minutes}:${seconds}`;
}
