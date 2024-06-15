import React from "react";
import CTInputField from "./CTInputField";

type TProps = {
  formTitle?: string;
  onSubmit?: () => void;
  formFields?: Array<{
    name: string;
    label: string;
    placeholder: string;
  }>;
  children?: React.ReactNode;
};

export default function CTForm({
  formTitle,
  formFields = [],
  children,
}: TProps) {
  const [formData, setFormData] = React.useState({});
  return (
    <div className="max-w-[20rem] flex flex-col gap-6 items-center">
      <p className="text-2xl font-bold">{formTitle}</p>
      {formFields.map((field, i) => (
        <CTInputField
          key={`CTInputFields_${i}`}
          onChange={(value) => {
            setFormData({ ...formData, [field.name]: value });
          }}
          label={field.label}
          placeHolder={field.placeholder}
        />
      ))}
      {children}
      <button
        onClick={() => {
          console.log(formData);
        }}
        className="bg-[#10B981] hover:bg-[#3d9c7c] text-white font-medium py-3 rounded-lg w-full"
      >
        Submit
      </button>
    </div>
  );
}
