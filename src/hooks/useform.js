import { useState } from 'react';

const useform = (initialState) => {
  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const [formValues, setFormValues] = useState(initialState);

  const handleValuesChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return [formValues, handleValuesChange, resetForm];
};

export default useform;
