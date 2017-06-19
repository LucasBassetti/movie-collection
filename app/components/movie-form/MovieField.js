import React from 'react';
import PropTypes from 'prop-types';
import Label from '../common/Label';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Error from '../common/Error';

const MovieField = (props) => {
  const { input, label, type, meta: { touched, error } } = props;

  if (type === 'file') {
    return (
      <div>
        <Label>
          {label}
        </Label>
        <div>
          <Input
            id={label}
            multiple={true}
            type={type}
            error={touched && error}
            onChange={(e) => {
              const files = [...e.target.files];
              const { addImage } = props;

              for (let i = 0, len = files.length; i < len; i += 1) {
                const FR = new FileReader();
                FR.onload = (event) => {
                  const image = event.target.result;
                  addImage(image);
                };
                FR.readAsDataURL(files[i]);
              }
            }}
          />
          {touched && ((error && <Error>{error}</Error>))}
          <label htmlFor={label}>Select images</label>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Label>
        {label}
      </Label>
      <div>
        {
          type === 'textarea' &&
          <TextArea
            {...input}
            placeholder={label}
            error={touched && error}
            rows="5"
          />
        }
        {
          type !== 'textarea' &&
          <Input
            {...input}
            placeholder={label}
            type={type}
            error={touched && error}
          />
        }
        {touched && ((error && <Error>{error}</Error>))}
      </div>
    </div>
  );
};

MovieField.propTypes = {
  addImage: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MovieField;
