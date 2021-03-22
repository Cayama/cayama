import styled from 'styled-components';

const AnnouncementIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0 0 50px 0;
  }
`;

const H1Announcement = styled.h1`
  color: white;
  text-align: start;
  margin: 0 0 50px 300px;
  width: 550px;
  @media (max-width: 768px) {
    color: ${(props) => props.theme.colors.primary};
    width: 100vw;
    text-align: center;
    margin: 0 0 50px 0;
  }
`;

const AnnouncementMain = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 100px 0 100px 0;


  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.background};
    padding: 50px 0 50px 0;
  }
`;

const WhiteStyleDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  z-index: 10;
  top: 420px;
  height: 240px;
  width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  AnnouncementIconsContainer,
  H1Announcement,
  AnnouncementMain,
  WhiteStyleDiv,
}
