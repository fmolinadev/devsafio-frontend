import { ErrorMessage, Field } from 'formik';

export const InputCheckbox = ({
  label,
  touched,
  errors,
  headText,
  data = [],
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={props.name}
          name={props.name}
          id={props.name}
          className="block  my-5 md:my-4 text-lg text-[#140B34]"
        >
          {label}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      {headText ? headText : null}
      <div className="form-control">
        <Field
          {...props}
          as="checkbox"
          id={props.name}
          name={props.name}
          className="label cursor-pointer mb-8"
        >
          <ul>
            {data && data.length > 1 ? (
              data.map((element, id, index) => (
                <li key={id ? id : index}>
                  <input
                    type="checkbox"
                    name={props.name}
                    value={
                      props.name === 'softSkills'
                        ? element.name + ', ' + element.id || element.index
                        : element.name || element
                    }
                    id={element.name || element}
                    className=".checkbox mr-4 my-2"
                  />
                  <span className="label-text font-light text-base text-[#232323]">
                    {element.name || element}
                  </span>
                </li>
              ))
            ) : (
              <p></p>
            )}
          </ul>
        </Field>
        {touched && errors && (
          <ErrorMessage
            component="div"
            name={props.name}
            className="text-red-500"
          />
        )}
      </div>
    </>
  );
};
