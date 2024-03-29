import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props) => props.height};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${(props) => (props.height === '100vh' ? '100%' : props.height)};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  background-color: ${(props) =>
    props.odd
      ? props.theme.colors.backgroundSecondary
      : props.theme.colors.backgroundPrimary};
  padding-right: 50px;

  @media screen and (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    padding: 10px 0;
    align-items: center;
    width: 100%;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 40px;
  text-align: right;

  .title {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .subTitle {
    margin-top: 7px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
    text-align: left;
    align-self: flex-start;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  background-color: ${(props) =>
    props.odd
      ? props.theme.colors.backgroundPrimary
      : props.theme.colors.backgroundSecondary};
  padding: 0 40px 0 50px;

  @media screen and (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    padding: 10px 0;
    align-items: ${(props) => (props.header ? 'center' : 'flex-start')};
    width: 100%;
  }
`;

export const SectionContentText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin: 40px 0;

  .text {
    font-size: 1.4rem;
  }

  .badge {
    min-width: 15px;
    min-height: 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: 10;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

export const SectionExperience = styled.div`
  display: flex;
  flex-direction: row;

  :not(:first-child) {
    margin-top: 20px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 5.5px;
    width: 2px;
    height: 100%;
    border-left: 3px dashed ${(props) => props.theme.colors.tertiary};
  }

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    .text {
      margin-top: 10px;
      margin-left: 25px;
    }
  }
`;

export const SectionExperienceInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const SectionName = styled.div`
  display: flex;
  flex-direction: column;

  .lastName {
    font-size: 3rem;
  }
  .name {
    font-size: 8rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }
  .function {
    padding-top: 10px;
    font-size: 2rem;
  }
`;

export const SectionLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};

  img {
    width: 25px;
    height: 25px;
    filter: invert(73%) sepia(4%) saturate(85%) hue-rotate(169deg)
      brightness(92%) contrast(84%);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      filter: invert(83%) sepia(47%) saturate(4126%) hue-rotate(1deg)
        brightness(94%) contrast(90%);
    }
  }
`;

export const SectionInfo = styled.div`
  margin-top: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 10px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .title {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .description {
    margin-top: 7px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ExperienceInfo = styled.div`
  margin-left: 10px;
  min-width: 250px;
  width: 250px;

  p:not(:first-child) {
    margin-top: 10px;
  }

  .yearInfo {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.tertiary};
  }

  .companyName {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .functionName {
    font-size: 1.2rem;
  }

  .city {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const EducationInfo = styled.div`
  margin-left: 10px;

  p:not(:first-child) {
    margin-top: 10px;
  }

  .yearInfo {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.tertiary};
  }

  .companyName {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .courseName {
    font-size: 1.2rem;
  }

  .city {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const SectionTechnologies = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 1.8rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  border-top: 1px solid ${(props) => props.theme.colors.primary};

  p {
    font-size: 1.2rem;
  }

  img {
    cursor: pointer;
    margin-left: 1rem;
    width: 3rem;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.selected {
      filter: brightness(50%);
    }
  }
`;

export const LanguageSelection = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 5%;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  padding: 2rem 4rem;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.secondary};

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.6rem;
    }

    img {
      cursor: pointer;
      margin-left: 1rem;
      width: 4rem;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .observation {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};

  display: flex;
  align-items: center;
  justify-content: center;
`;
