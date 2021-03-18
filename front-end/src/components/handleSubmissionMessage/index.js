import React from 'react';
import { SuccessMessageCard, ErrorMessageCard } from '../cards';

// import { Container } from './styles';

function HandleSubmissionMessage({ objectController: { type, messages } }) {
  switch (type) {
    case 'successfullProductRegister':
      return <SuccessMessageCard messages={messages} />;
    case 'failedProductRegister':
      return <ErrorMessageCard messages={messages} />
  }
}

export default HandleSubmissionMessage;
