import "./ClaimInsurance.css";
import React, { useState, useRef } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";

const ClaimInsurance = () => {
  const [formData, setFormData] = useState({});
  const toastBR = useRef(null);
  const [selectedPolicyholder, setSelectedPolicyholder] = useState(null);
  const policyholders = [
    { label: "Mr. 1", value: "1" },
    { label: "Mr. 2", value: "2" },
  ];

  const validate = (data) => {
    let errors = {};
    if (!data.policyholderId) {
      errors.policyholderId = "Policyholder Id is required.";
    }

    if (!data.claimedAmout) {
      errors.claimedAmout = "Claim amount is required.";
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

  const onChangePolicyholder = (data) => {
    setSelectedPolicyholder(data);
  };

  return (
    <div className="form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h3 className="text-center">Claim Used Amount</h3>
          <Form
            onSubmit={onSubmit}
            initialValues={{ policyholderId: "", claimedAmout: "" }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="policyholderId"
                  render={({ input, meta }) => (
                    <div className="field">
                      <label>
                        <span className="required">*</span>Claim Amount
                      </label>
                      <span className="p-float-label">
                        <Dropdown
                          value={selectedPolicyholder}
                          options={policyholders}
                          onChange={(e) => onChangePolicyholder(e.value)}
                          placeholder="Select a Policyholder"
                          id="policyholderId"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="policyholderId"
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
                  name="claimedAmout"
                  render={({ input, meta }) => (
                    <div className="field">
                      <label>
                        <span className="required">*</span>Claim Amount
                      </label>
                      <span className="p-float-label">
                        <InputText
                          id="claimedAmout"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="claimedAmout"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        ></label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />

                <div className="register">
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
export default ClaimInsurance;
