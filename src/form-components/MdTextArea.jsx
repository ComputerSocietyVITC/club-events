import { useField, ErrorMessage } from 'formik';
export default function MdTextArea({ label, wrapperCSS, labelCSS, ...props }) {
  const [field] = useField(props);

  if (label) {
    return (
      <div className={wrapperCSS}>
        <label className={labelCSS}>
          <p>{label}</p>
          <textarea {...field} {...props} />
        </label>
        <ErrorMessage name={field.name} component="div" className="text-xs" />
      </div>
    );
  } else {
    return (
      <div className={wrapperCSS}>
        <textarea {...field} {...props} />
        <ErrorMessage name={field.name} component="div" className="text-xs" />
      </div>
    );
  }
}

/*TODO: make this a markdown text-area (draft.js maybe?) 
instead of a plain textarea */
