import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useRouterFunction from '../infra/components/useRouter';
import { cleanUser, verifyExpiredToken } from '../utils/index';

function useVerifyExpiredToken() {
  const history = useRouterFunction();
  const dispatch = useDispatch();

  useEffect(() => {
    if (verifyExpiredToken()) {
      cleanUser(dispatch, history, '/login');
    }
  }, [])
}

export default useVerifyExpiredToken;
