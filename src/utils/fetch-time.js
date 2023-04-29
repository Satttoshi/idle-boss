export default async function fetchTime() {
  const res = await fetch("/api/time/get-time");
  const { time } = await res.json();
  return time;
}
