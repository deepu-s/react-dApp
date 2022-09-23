import './RegisterPolicyHolder.css';
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

const Policyholder = () => {

  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = "Applicant name is required.";
    }
    if (!data.amount) {
      errors.amount = "Insured amount is required.";
    }
    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  
  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h3 className="text-center">Register Policyholder</h3>
          <Form
            onSubmit={onSubmit}
            initialValues={{ name: "", amount: "" }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <div className="field">
                      <label><span className='required'>*</span>Applicant Name</label>
                      <span className="p-float-label">
                        <InputText
                          id="name"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="name"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        ></label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="amount"
                  render={({ input, meta }) => (
                    <div className="field">
                      <label><span className='required'>*</span>Insured Amount</label>
                      <span className="p-float-label p-input-icon-right">
                        <InputText type="number"
                          id="amount"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="amount"
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
        </div>
      </div>
    </div>
  );
};
export default Policyholder;
