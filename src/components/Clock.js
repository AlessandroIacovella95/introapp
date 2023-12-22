// componente Clock
// Per catturare le proprietà inseriamo un paramentro nelle parentesi tonde
const Clock = ({ country, timezone }) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const date = new Date(t);
  return (
    <p>
      In {country} is{" "}
      {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
    </p>
  );
};
export default Clock;
