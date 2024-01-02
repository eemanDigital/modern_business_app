import propTypes from 'prop-types';
import { useState } from 'react';

function Form({ inputFields, onSubmit }) {
  const [inputs, setInputs] = useState({});

  function handleInputs(e) {
    const { value, name } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputs);
    // setInputs({});
  }

  return (
    <form onSubmit={handleSubmit} className='register'>
      <div className='inputs'>
        {inputFields.map((field) => {
          return (
            <input
              key={field.name}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              value={inputs[field.name] || ''}
              onChange={handleInputs}
            />
          );
        })}
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  inputFields: propTypes.array.isRequired,
  onSubmit: propTypes.func.isRequired,
};
export default Form;
