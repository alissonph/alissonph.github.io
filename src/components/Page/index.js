import React, { useEffect, useState } from 'react';
import {
  Container,
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
  SectionContentText,
  Avatar,
  SectionName,
  SectionLink,
  LinkButton,
  SectionInfo,
  InfoItem,
  ExperienceInfo,
  SectionExperience,
  SectionExperienceInfo,
  EducationInfo,
  SectionTechnologies,
  Technology,
  Footer,
  LanguageSelection,
  LoadingContainer,
} from './styles';
import { Switch } from '../Switch';
import perfil from '../../assets/images/perfil.jpg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import brazil from '../../assets/icons/brazil.svg';
import unitedStates from '../../assets/icons/united-states.svg';
import loading from '../../assets/icons/loading.svg';
import dataPtBr from '../../data/data_pt-BR.json';
import dataEn from '../../data/data_en.json';
import { hasPreferredLanguage, setPreferredLanguage } from '../../utils/utils';

export default function Page({ toggleTheme, setLanguage, language }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (language === 'pt-BR') {
      setData(dataPtBr);
    } else {
      setData(dataEn);
    }
    console.log(language);
  }, [language]);

  function selectPtBr() {
    setLanguage('pt-BR');
    setPreferredLanguage('pt-BR');
  }

  function selectEn() {
    setLanguage('en-US');
    setPreferredLanguage('en-US');
  }

  if (!data) {
    return (
      <LoadingContainer>
        <img src={loading} alt='Loading' />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Section height='100vh'>
        <SectionHeader>
          <Avatar src={perfil} />
        </SectionHeader>
        <SectionContent header>
          <Switch id='switch' className='switch'>
            <input type='checkbox' id='slider' onChange={toggleTheme} />
            <span className='slider round'></span>
          </Switch>
          <div>
            <SectionName>
              <p className='lastName'>{data.lastName}</p>
              <p className='name'>{data.name}</p>
              <p className='function'>{data.function}</p>
            </SectionName>
            <SectionLink>
              <LinkButton
                href={data.linkedinLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedin} alt='Linkedin' />
              </LinkButton>
              <LinkButton
                href={data.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='Github' />
              </LinkButton>
              <LinkButton
                href={data.whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={whatsapp} alt='Whatsapp' />
              </LinkButton>
            </SectionLink>
          </div>
          <SectionInfo>
            {data.info.map((item) => (
              <InfoItem key={item.title}>
                <p className='title'>{item.title}</p>
                {item.link ? (
                  <p className='description'>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {item.description}
                    </a>
                  </p>
                ) : (
                  <p className='description'>{item.description}</p>
                )}
              </InfoItem>
            ))}
          </SectionInfo>
        </SectionContent>
      </Section>
      <Section height='auto'>
        <SectionHeader odd>
          <SectionTitle>
            <p className='title'>{data.intro.title}</p>
            <p className='subTitle'>{data.intro.subTitle}</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent odd>
          <SectionContentText>
            <p
              className='text'
              dangerouslySetInnerHTML={{ __html: data.intro.description }}
            ></p>
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height='auto'>
        <SectionHeader>
          <SectionTitle>
            <p className='title'>{data.experience.title}</p>
            <p className='subTitle'>{data.experience.subTitle}</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <SectionContentText>
            {data.experience.items.map((item) => (
              <SectionExperience key={item.companyName}>
                <SectionExperienceInfo>
                  <div className='badge'></div>
                  <ExperienceInfo>
                    <p className='yearInfo'>{item.year}</p>
                    <p className='companyName'>{item.companyName}</p>
                    <p className='functionName'>{item.functionName}</p>
                    <p className='city'>{item.city}</p>
                  </ExperienceInfo>
                </SectionExperienceInfo>
                <div>
                  <p
                    className='text'
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </SectionExperience>
            ))}
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height='auto'>
        <SectionHeader odd>
          <SectionTitle>
            <p className='title'>{data.education.title}</p>
            <p className='subTitle'>{data.education.subTitle}</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent odd>
          <SectionContentText>
            {data.education.items.map((item) => (
              <SectionExperience key={item.courseName}>
                <SectionExperienceInfo>
                  <div className='badge'></div>
                  <EducationInfo>
                    <p className='yearInfo'>{item.year}</p>
                    <p className='companyName'>{item.companyName}</p>
                    <p className='courseName'>{item.courseName}</p>
                    <p className='city'>{item.city}</p>
                  </EducationInfo>
                </SectionExperienceInfo>
              </SectionExperience>
            ))}
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height='auto'>
        <SectionHeader>
          <SectionTitle>
            <p className='title'>{data.technologies.title}</p>
            <p className='subTitle'>{data.technologies.subTitle}</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <SectionContentText>
            <SectionTechnologies>
              {data.technologies.items.map((item) => (
                <Technology key={item}>
                  <div className='badge'></div>
                  <p>{item}</p>
                </Technology>
              ))}
            </SectionTechnologies>
          </SectionContentText>
        </SectionContent>
      </Section>
      <Footer>
        <p>{data.footer}</p>
        <img
          src={brazil}
          className={language === 'pt-BR' ? 'selected' : ''}
          onClick={selectPtBr}
          alt='Select portuguese language'
        />
        <img
          src={unitedStates}
          className={language === 'en' || language == 'en-US' ? 'selected' : ''}
          onClick={selectEn}
          alt='Select english language'
        />
      </Footer>
      {!hasPreferredLanguage() && (
        <LanguageSelection>
          <div className='content'>
            <p>Select your preferred language:</p>
            <img
              src={brazil}
              onClick={selectPtBr}
              alt='Select portuguese language'
            />
            <img
              src={unitedStates}
              onClick={selectEn}
              alt='Select english language'
            />
          </div>
          <p className='observation'>
            You can also change the language in the footer
          </p>
        </LanguageSelection>
      )}
    </Container>
  );
}
