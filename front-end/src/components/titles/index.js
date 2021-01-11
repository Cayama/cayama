import { Title } from '../foundation/text';
import { HomePageTitlesContainer } from './styles';

const HomePageTitles = ({ children }) => {
  return (
    <HomePageTitlesContainer>
      <Title>
        {children}
      </Title>
    </HomePageTitlesContainer>
  );
};

export { HomePageTitles }
