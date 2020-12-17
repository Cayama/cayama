import apiProductsRequest from '../../Services/apiProductsRequest';

export const API_REQUEST = 'API_REQUEST';
export const API_RECEIVE_SUCCESS = 'API_RECEIVE_SUCCESS';
export const API_RECEIVE_FAILURE = 'API_RECEIVE_FAILURE';

const apiRequestControl = () => ({ type: API_REQUEST });

const receiveApiDataSuccess = ({ products = [] }) => (
  { type: API_RECEIVE_SUCCESS, data: products }
);

const receiveApiDataFailure = (error) => ({ type: API_RECEIVE_FAILURE, errorMessage: error });

export function getApiData() {
  return (dispatch) => {
    dispatch(apiRequestControl());

    return apiProductsRequest()
      .then(
        (productsData) => dispatch(receiveApiDataSuccess(productsData)),
        (error) => dispatch(receiveApiDataFailure(error.message)),
      );
  };
}
