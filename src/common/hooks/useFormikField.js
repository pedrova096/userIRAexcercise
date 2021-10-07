import {useCallback} from 'react';
import _ from 'lodash';

export const resolvePath = (obj, key) => _.get(obj, key);

const useFormikField = ({
  formik: {handleChange, handleBlur, values, touched, errors},
  path = false,
  loading = false,
}) => {
  const handleErrorProps = useCallback(
    field => {
      const error = path ? resolvePath(errors, field) : errors[field];
      let wasTouched = path ? resolvePath(touched, field) : touched[field];
      return {
        helpText: error && wasTouched ? error : '',
        error: Boolean(error),
      };
    },
    [errors, path, touched],
  );

  const handleFieldProps = useCallback(
    field => {
      const value = (path ? resolvePath(values, field) : values[field]) || '';
      return {
        onChangeText: handleChange(field),
        onBlur: handleBlur(field),
        value: `${value}`,
        editable: !loading,
        ...handleErrorProps(field),
      };
    },
    [handleBlur, handleChange, handleErrorProps, loading, path, values],
  );
  const validateErrorFields = useCallback(
    fields => _.isEmpty(_.pick(errors, fields)),
    [errors],
  );

  return {handleFieldProps, handleErrorProps, validateErrorFields};
};

export default useFormikField;
