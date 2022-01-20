import React, { memo } from 'react';
import Button from '../Button';

const PhotosGallery = (props) => {
  const { photos } = props;

  const [gallery, setGallery] = React.useState(photos);

  const handleRemove = (key) => {
    const newGallery = gallery.filter((_img, index) => index !== key)
    setGallery(newGallery);
  }

  const renderPhotos = (img, key) => {
    return (
      <div key={key}>
        <img src={img} alt="Imagem aleatória"/>

        <Button
          onClick={ () => handleRemove(key) }
        >
          Excluir
        </Button>
      </div>
    )
  }

  return (
    <div>
      {gallery.map(renderPhotos)}
    </div>
  )
};

export default memo(PhotosGallery);
