import MoneyDisplay from "~/src/components/MoneyDisplay";

export default function BossFloor() {
  function handleChange(event) {
    if (event.target.value.includes(" ")) {
      event.target.value = event.target.value.replace(" ", "");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <>
      <MoneyDisplay />
      <div>hhi</div>
      <form onSubmit={handleSubmit} aria-label="change username">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={handleChange} min="3" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
