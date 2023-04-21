import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function NameForm() {
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
    <StyledForm onSubmit={handleSubmit} aria-label="change username">
      <fieldset>
        <label htmlFor="name">Name</label>
        <StyledInput
          id="name"
          type="text"
          name="username"
          onChange={handleChange}
          minLength="3"
          required
        />
        <StyledButton type="submit">change</StyledButton>
      </fieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  width: 375px;
  height: 60px;

  fieldset {
    border: none;
  }
`;

const StyledInput = styled.input`
  border: none;
  position: absolute;
  top: 16px;
  left: 101px;

  width: 158px;
  height: 28px;
  border-bottom: 3px solid var(--5);
  border-radius: 3px;

  background-color: var(--1);
`;

const StyledButton = styled.button`
  position: absolute;
  top: 18px;
  right: 34px;

  width: 69px;
  height: 24px;
`;
