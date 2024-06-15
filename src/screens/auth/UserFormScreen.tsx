import CTForm from "../../components/common/CTForm";
import CTImagePicker from "../../components/common/CTImagePicker";
import CTWrapper from "../../components/common/CTWrapper";

export default function UserFormScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5FAF8]">
      <CTWrapper>
        <CTForm
          formFields={[
            {
              name: "name",
              label: "Name",
              placeholder: "Enter your Name",
            },
            {
              name: "email",
              label: "Email",
              placeholder: "Enter your Email",
            },
            {
              name: "address",
              label: "Address",
              placeholder: "Enter your Address",
            },
          ]}
          formTitle="Fill in your details"
        >
          <CTImagePicker />
        </CTForm>
      </CTWrapper>
    </div>
  );
}
