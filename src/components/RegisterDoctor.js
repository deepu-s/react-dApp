import React, { useState, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

const Doctor = () => {
  const [formData, setFormData] = useState({});
  const toastBR = useRef(null);

  const validate = (data) => {
    let errors = {};
    if (!data.metamaskAddress) {
      errors.metamaskAddress = "Metamask Address is required.";
    }
    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    showBottomRight("success", "Success!", "Successfully registered!");
    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const showBottomRight = (severity, summary, message) => {
    toastBR.current.show({
      severity: severity,
      summary: summary,
      detail: message,
      life: 3000,
    });
  };

  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h3 className="text-center">Register Doctor</h3>
          <Form
            onSubmit={onSubmit}
            initialValues={{ metamaskAddress: "" }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="metamaskAddress"
                  render={({ input, meta }) => (
                    <div className="field">
                      <label><span className='required'>*</span>Metamask Address</label>
                      <span className="p-float-label">
                        <InputText
                          id="metamaskAddress"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="metamaskAddress"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        ></label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
             
                <div className='register'>
                  <Button type="submit" label="Register" className="mt-2" />
                </div>
              </form>
            )}
          />
          <Toast ref={toastBR} position="bottom-right"></Toast>
        </div>
      </div>
    </div>
  );
};
export default Doctor;
