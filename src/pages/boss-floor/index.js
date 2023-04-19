import MoneyDisplay from "~/src/components/MoneyDisplay";
import Navigation from "~/src/components/Navigation";
import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function BossFloor() {
  const setUsername = useStore((state) => state.setUsername);
  function handleChange(event) {
    if (event.target.value.includes(" ")) {
      event.target.value = event.target.value.replace(" ", "");
    }
    if (event.target.value.length > 25) {
      event.target.value = event.target.value.slice(0, 25);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setUsername(data.username);
  }

  return (
    <>
      <MoneyDisplay />
      <StyledSection>
        <form onSubmit={handleSubmit} aria-label="change username">
          <fieldset>
            <legend>Change username</legend>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="username"
              onChange={handleChange}
              minLength="3"
              required
            />
            <button type="submit">change</button>
          </fieldset>
        </form>
      </StyledSection>
      <Navigation />
    </>
  );
}

const StyledSection = styled.section`
  margin-top: 100px;
`;
