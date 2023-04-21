import styled from "styled-components";

export default function Application({ userName, selectedManager }) {
  switch (selectedManager) {
    case 1:
      return (
        <>
          <StyledManagerName>Manuel Penguin</StyledManagerName>
          <StyledApplication>
            <StyledArticle>
              <h4>Dear {userName}</h4>
              <p>
                I am a skilled Wordpress Creator Manager with experience in
                website development, optimization, and customer service. I
                believe my expertise and passion for Wordpress make me a great
                fit for your team. Thank you for considering my application.
              </p>
              <span>Sincerely, Manuel</span>
            </StyledArticle>
          </StyledApplication>
        </>
      );
    case 2:
      return (
        <>
          <StyledManagerName>Verena Plantling</StyledManagerName>
          <StyledApplication>
            <StyledArticle>
              <h4>Hey {userName}!</h4>
              <p>
                I am a tremendous Vue.js developer and I would love to
                contribute to your team as a Vue App Dev. I have experience in
                designing user-friendly interfaces, integrating APIs, and
                optimizing app performance. I am passionate delivering
                high-quality web applications that meet project deadlines.
              </p>
              <span>Greetings, Verena</span>
            </StyledArticle>
          </StyledApplication>
        </>
      );
    case 3:
      return (
        <>
          <StyledManagerName>Kevin Waynorizz</StyledManagerName>
          <StyledApplication>
            <StyledArticle>
              <h4>What goes {userName}!</h4>
              <p>
                I am a Next.js developer with expertise in building scalable web
                applications. My skills include designing and implementing
                advanced features, optimizing app performance for high-traffic
                apps. I love aping into latest technologies and trends and I am
                confident that I can contribute to your teams success.
              </p>
              <span>With huge respects Mr. Waynorizz</span>
            </StyledArticle>
          </StyledApplication>
        </>
      );
    case 4:
      return (
        <>
          <StyledManagerName>Enricö Björk</StyledManagerName>
          <StyledApplication>
            <StyledArticle>
              <h4>Dear {userName}!</h4>
              <p>
                I{"'"}m a Ruby on Rails wizard with a knack for crafting slick
                web applications. I{"'"}m always up-to-date with the latest
                technologies and trends, and I promise to deliver projects on
                time and within budget. Let{"'"}s create some magic together!
                Hire me, you won{"'"}t regret it.
              </p>
              <span>Thanks, Enricö</span>
            </StyledArticle>
          </StyledApplication>
        </>
      );
    default:
      return null;
  }
}

const StyledManagerName = styled.h3`
  position: absolute;
  top: 39px;
  right: 14px;

  width: 200px;
  font-size: 1.2rem;
  font-family: var(--font1);
  font-weight: 600;
  margin: 0;
  color: var(--1);
  text-align: center;
`;

const StyledApplication = styled.div`
  position: absolute;
  top: 103px;
  left: 50%;
  transform: translateX(-50%);

  width: 290px;
  height: 216px;
  background-color: var(--4);
  border-radius: 15px;

  font-family: var(--font1);

  display: grid;
  place-items: center;
`;

const StyledArticle = styled.article`
  padding: 22px;
  font-weight: 400;
  font-size: 0.8rem;

  h4 {
    margin: 0;
    font-weight: 400;
  }
`;
