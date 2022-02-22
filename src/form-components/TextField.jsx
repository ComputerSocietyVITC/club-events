import { useField, ErrorMessage } from 'formik';

export default function TextField({ label, wrapperCSS, labelCSS, ...props }) {
  const [field] = useField(props);

  if (label) {
    return (
      <div className={wrapperCSS}>
        <label className={labelCSS}>
          <p>{label}</p>
          <input {...field} {...props} />
        </label>
        <ErrorMessage name={field.name} component="div" className="text-xs" />
      </div>
    );
  } else {
    return (
      <div className={wrapperCSS}>
        <input {...field} {...props} />
        <ErrorMessage name={field.name} component="div" className="text-xs" />
      </div>
    );
  }
}
