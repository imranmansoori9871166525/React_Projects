import React from "react";
import styles from "./styles/BackImageForm.module.css";
import { Label } from "./switchCaseComponents";
import { theme } from "../theme/theme";
import "../App.css";

interface FormField {
  type: string;
  placeholder: string;
}

interface BackImageFormProps {
  backgroundImage?: string;
  title?: string;
  formFields?: FormField[];
  buttonText?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BackImageForm: React.FC<BackImageFormProps> = ({
  backgroundImage,
  title = "",
  formFields = [],
  buttonText = "",
  onSubmit,
}) => {
  const inputFields = formFields.filter((field) => field.type !== "textarea");
  const textAreaFields = formFields.filter(
    (field) => field.type === "textarea"
  );

  const groupedInputFields = [];
  for (let i = 0; i < inputFields.length; i += 2) {
    groupedInputFields.push(inputFields.slice(i, i + 2));
  }

  return (
    <div
      className="w-100 position-relative py-5 w-100 d-flex align-center"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(1)",
      }}
    >
      <div className="row px-5 m-0 backImageResponsive">
        <div
          className="mx-4 col-sm-12 col-md-12 col-lg-4 backImageResponsive"
          style={{ textAlign: "center" }}
        >
          <Label
            content={title}
            fontSize="7xl"
            color={theme.colors.white}
            clasname={"backImageResponsive"}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <form className={styles.form} onSubmit={onSubmit}>
            {groupedInputFields.map((group, index) => (
              <div key={index} className={styles.inputRow}>
                {group.map((field, idx) => (
                  <div key={idx} className={styles.inputGroup}>
                    <input type={field.type} placeholder={field.placeholder} />
                  </div>
                ))}
              </div>
            ))}
            {textAreaFields.map((field, index) => (
              <div key={index} className={styles.inputGroup}>
                <textarea placeholder={field.placeholder}></textarea>
              </div>
            ))}
            <button type="submit" className={styles.fullWidthButton}>
              <Label
                content={buttonText}
                color={theme.colors.white}
                fontSize="xl"
                fontWeight="bold"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackImageForm;
