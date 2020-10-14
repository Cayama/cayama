const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream1 = fs.createReadStream('./Heineken600ml.jpg');
const stream2 = fs.createReadStream('./Heineken600ml.jpg');

const form = new FormData();
form.append('productImages', stream1);
form.append('logo', stream2);

const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3001/store/register-product', form, {
    headers: {
      ...formHeaders,
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmNzc1NDBjOWNhMjUxNDk1ZDg2MWNhMiIsImZpcnN0TmFtZSI6IkphZmV0IEhlbnJpcXVlIiwibGFzdE5hbWUiOiJHdWVycmEgRmFndW5kZXMiLCJlbWFpbCI6ImphZnNkZXNzc3NzdEBqYWZlc3QuY29tLmJyIiwiYmlydGhEYXRlIjoiMDIvMDcvMTk5NCIsImluZmx1ZW5jZXIiOnsic29jaWFsTWVkaWEiOiJZb3VUdWJlIiwic29jaWFsTWVkaWFOYW1lIjoiQ2FuYWwgWW91IFRlY2hub2xvZ3kiLCJjb250ZW50VHlwZSI6IlRlY25vbG9naWEiLCJpbmZsdWVuY2VyTGluayI6ImphZmV0ZWNoIn0sImFkZHJlc3NlcyI6W3sibmFtZSI6IkphZmV0IEhlbnJpcXVlIEd1ZXJyYSBGYWd1bmRlcyIsImNlcCI6IjMwMzUwNjYwIiwic3RhdGUiOiJNaW5hcyBHZXJhaXMiLCJjaXR5IjoiQmVsbyBIb3Jpem9udGUiLCJuZWlnaGJvcmhvb2QiOiJTw6NvIEJlbnRvIiwic3RyZWV0IjoiUnVhIERvdXRvciBNYXJpbyBQaXJlcyIsIm51bWJlciI6IjkxIiwiY29tcGxlbWVudCI6IkNhc2EiLCJwaG9uZSI6IjMxOTk2NDcxODg4In1dfSwiaWF0IjoxNjAyNjMxNjg2LCJleHAiOjE2MDI2MzUyODZ9.tUZl4T1iYEroq4HL7ZUrT282q4uBrJcRPnqvWFd9uWo',
    },
  })
  .then(() => console.log('Salvo com Sucesso!'))
  .catch((error) => console.log(error));
