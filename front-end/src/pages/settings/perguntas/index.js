import React, { useRef } from 'react';
import Header from '../../../patterns/header';
import Head from '../../../infra/components/head';
import Footer from '../../../patterns/footer';
import { CustomInputWithUseRef } from '../../../components/layout/inputGroup';
import { CayamaPrimaryButton } from '../../../components/layout/buttonGroup';
import { handleUseRef } from '../../../utils';
import { PageContentDiv, PageContainerSection, FlexEndContainer } from '../../../components/dataGrid';
import Grid from '@material-ui/core/Grid';
// import { Container } from './styles';
const question = {
  question: 'Qual o menor preco?',
}
function QuestionsPage() {
  const questionPhrase = useRef(question.question);
  const questionAnswer = useRef('');

  return (
    <div>
      <Head title="Perguntas Clientes" />
      <Header />
      <main>
        <PageContainerSection>
          <PageContentDiv>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <CustomInputWithUseRef
                  name="productQuestion"
                  id="productQuestion"
                  setInput={handleUseRef}
                  defaultValue={questionPhrase.current}
                  fieldToUseRef={questionPhrase}
                  label="Pergunta"
                  disabled={false}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomInputWithUseRef
                  name="questionAnswer"
                  id="questionAnswer"
                  setInput={handleUseRef}
                  defaultValue={questionAnswer.current}
                  fieldToUseRef={questionAnswer}
                  label="Resposta"
                  disabled={false}
                />
              </Grid>
            </Grid>
            <FlexEndContainer>
              <CayamaPrimaryButton onClick={(() => console.log("kkk"))}>
                Responder
              </CayamaPrimaryButton>
            </FlexEndContainer>
          </PageContentDiv>
        </PageContainerSection>
      </main>
      <Footer />
    </div>
  );
}

export default QuestionsPage;
