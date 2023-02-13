import { ErrorMessage, Field } from 'formik';

export const InputRadio = ({ label, touched, errors, children, ...props }) => {
  return (
    <>
      {label && (
        <label
          name={props.name}
          className="block  my-5 md:my-4 text-lg text-[#140B34]"
        >
          {label}
          {props.required ? <span className=" text-red-700">*</span> : null}
        </label>
      )}
      <Field {...props} as="radio" name={props.name} className="mr-4 my-2">
        {children[1] ? (
          <ul>
            {children.map((element, index) => (
              <li key={index}>
                <Field
                  type="radio"
                  name={props.name}
                  value={
                    props.name === 'devExperience' ||
                    props.name === 'relocationOption'
                      ? element + ', ' + index
                      : element
                  }
                  id={element}
                  className="radio1 mr-4 my-2"
                />
                <label className=" text-base font-light text-[#232323]">
                  {element}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          children
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
