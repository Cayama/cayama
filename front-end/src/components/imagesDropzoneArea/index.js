import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone'
import carroselDataMock from '../../../dataMock/carroselMock';
// import { Container } from './styles';

function ImagesDropzoneArea({ setImages, initialFiles }) {
  return (
    <DropzoneArea
      acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
      showPreviews={false}
      maxFileSize={5000000}
      dropzoneText="Arraste as imagens do produto para aqui"
      showPreviewsInDropzone={true}
      filesLimit={8}
      onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
      onChange={(files) => setImages(files)}
      initialFiles={initialFiles}
      onDelete={(fileObj) => console.log('Removed File:', fileObj)}
    />
  );
}

export { ImagesDropzoneArea };
