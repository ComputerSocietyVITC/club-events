import { Formik, FieldArray, Field, ErrorMessage } from 'formik';
import { BiPlusCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import * as Yup from 'yup';
import TextField from '../../form-components/TextField';
import MdTextArea from '../../form-components/MdTextArea';

export default function CreateEvent() {
  const CreateEventSchema = Yup.object().shape({
    eventName: Yup.string()
      .min(2, 'Event name needs to be atleast 2 characters')
      .max(50, 'Event name may not exceed 50 characters')
      .required('Required'),
    teamSize: Yup.number().min(1, 'Must be atleast 1'),
    coordinatorName: Yup.string().min(2).max(50).required('Required'),
    categories: Yup.array().of(
      Yup.string().max(50, 'Too long!').required('Cannot leave tag empty'),
    ),
    eventInfo: Yup.string().max(5000, 'Too long!'),
    contactNo: Yup.string()
      .matches(/^([+]\d{2})?\d{10}$/, 'Invalid mobile number')
      .required('Required'),
  });

  return (
    <main className="flex flex-col m-10 text-white font-monty">
      <h1 className="text-4xl pb-10"> Create Event </h1>
      <section className="flex flex-col gap-5">
        <Formik
          initialValues={{
            eventName: '',
            categories: ['example', 'example2', 'example3', 'example4'],
            teamSize: '',
            coordinatorName: '',
            contactNo: '',
            eventInfo: '',
          }}
          validationSchema={CreateEventSchema}
        >
          {({ values }) => (
            <>
              <TextFieldPartial name="eventName" label="Event Name" />
              <label className="flex flex-col gap-3">
                Categories
                <FieldArray name="categories">
                  {({ push, remove }) => (
                    <div className="flex gap-2 flex-wrap">
                      {values.categories.length > 0 &&
                        values.categories.map((_, index) => (
                          <div className="flex gap-1" key={_}>
                            <TextFieldPartial
                              name={`categories.${index}`}
                              className="p-1 text-center text-sm bg-darkergreen rounded-lg focus:border-lightergreen focus:border-2 outline-none placeholder-gray-50 placeholder-opacity-50"
                            />
                            <button onClick={() => remove(index)}>
                              <AiFillCloseCircle />
                            </button>
                          </div>
                        ))}
                      <button onClick={() => push('')}>
                        <BiPlusCircle />
                      </button>
                    </div>
                  )}
                </FieldArray>
              </label>
              <TextFieldPartial name="teamSize" label="Team Size" className="w-20" />
              <div className="flex justify-items-start gap-10">
                <TextFieldPartial name="coordinatorName" label="Coordinator Name" />
                <TextFieldPartial name="contactNo" label="Contact No." />
              </div>
              <MdTextArea
                name="eventInfo"
                label="Event Info"
                rows="10"
                cols="60"
                wrapperCSS="flex flex-col"
                labelCSS="flex flex-col gap-3"
                className="bg-darkergreen rounded-lg focus:border-lightergreen focus:border-2 outline-none"
              />
            </>
          )}
        </Formik>
      </section>
    </main>
  );
}

function TextFieldPartial({ name, label, wrapperCSS, labelCSS, className }) {
  return (
    <TextField
      name={name}
      label={label}
      wrapperCSS={'flex flex-col' + ' ' + (wrapperCSS ?? '')}
      labelCSS={'flex flex-col gap-3' + ' ' + (labelCSS ?? '')}
      className={
        'bg-darkergreen rounded-lg focus:border-lightergreen focus:border-2 outline-none p-1' +
        ' ' +
        className
      }
    />
  );
}
