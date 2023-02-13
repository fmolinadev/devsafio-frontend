import { ErrorMessage, Field } from 'formik';

export const InputSelect = ({ label, touched, errors, data, ...props }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-xl my-4 font-medium text-[#140B34]"
        >
          {label}{' '}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      <Field
        {...props}
        as="select"
        id={props.name}
        className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] focus:ring-[#E2F2FE]-300 sm:text-xl"
      >
        {data[1] ? (
          <>
            <option defaultValue={null}>Seleccionar</option>
            {data.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </>
        ) : (
          data
        )}
      </Field>
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
