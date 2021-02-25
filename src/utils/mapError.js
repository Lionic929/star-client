const mapError = ({ meta: { touched, error } = {}, input, ...props }) => {
  const isError = !!(touched && error);

  const errorProps = {
    ...props,
    ...input,
    error: isError,
    helperText: isError ? error : props.helperText,
  };
  const defaultProps = { ...props, ...input };

  return isError ? errorProps : defaultProps;
};

export default mapError;
