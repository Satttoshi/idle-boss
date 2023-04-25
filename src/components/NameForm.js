import useStore from "~/src/zustand/store";
import styled from "styled-components";

export default function NameForm() {
  const setUsername = useStore((state) => state.setUsername);
  function handleChange(event) {
    if (event.target.value.includes("  ")) {
      event.target.value = event.target.value.replace("  ", " ");
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
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          name="username"
          onChange={handleChange}
          minLength="3"
          required
        />
        <StyledButton type="submit">change!</StyledButton>
      </fieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  width: 375px;
  height: 60px;
  margin-top: 20px;

  fieldset {
    border: none;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 19px;
  left: 0px;

  font-family: var(--font1);
  font-size: 1rem;
  font-weight: 500;
  color: var(--1);
  text-align: right;

  text-shadow: var(--shadow1);

  width: 87px;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledInput = styled.input`
  border: none;
  position: absolute;
  top: 16px;
  left: 101px;

  width: 158px;
  height: 28px;
  border-bottom: 3px solid var(--5);
  border-radius: 4px;

  background-color: var(--1);
  box-shadow: var(--shadow1);

  text-align: center;
  font-family: var(--font1);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--5);
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 18px;
  right: 34px;

  width: 69px;
  height: 24px;

  background-color: var(--1);
  border-radius: 3px;
  box-shadow: var(--shadow1);

  font-family: var(--font1);
  font-size: 0.8rem;
  font-weight: 590;
  color: var(--5);

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
