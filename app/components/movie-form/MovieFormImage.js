import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './ImageContainer';
import Options from './Options';
import Option from './Option';
import CloseOption from './CloseOption';
import CloseIcon from '../common/CloseIcon';

const MovieFormImage = (props) => {
  const { image, isCover, index, setCover, remove } = props;

  return (
    <ImageContainer image={image}>
      <Options>
        {
          isCover &&
          <Option isCover={isCover}>
            COVER
          </Option>
        }
        {
          !isCover &&
          <Option
            onClick={() => setCover(image)}
            isCover={isCover}
          >
            SET COVER
          </Option>
        }
        <CloseOption onClick={() => remove(index)}>
          <CloseIcon />
        </CloseOption>
      </Options>
    </ImageContainer>
  );
};

MovieFormImage.propTypes = {
  image: PropTypes.string.isRequired,
  isCover: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  setCover: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default MovieFormImage;
