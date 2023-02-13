import { ErrorMessage, Field } from 'formik';

export const InputTextArea = ({
  label,
  touched,
  errors,
  headText,
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-xl my-4  font-medium text-[#140B34]"
        >
          {label}{' '}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      {headText ? headText : null}
      <Field
        {...props}
        as="textarea"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] focus:ring-[#E2F2FE]-300 md:text-xl"
      />
      {touched && errors && (
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-red-500"
        />
      )}
    </>
  );
};
