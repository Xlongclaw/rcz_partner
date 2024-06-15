import AUChipLink from "../../components/auth/AUChipLink";
import CTForm from "../../components/common/CTForm";
import CTWrapper from "../../components/common/CTWrapper";

export default function RegistrationScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5FAF8]">
      <CTWrapper>
        <CTForm
          formFields={[
            {
              name: "phno",
              label: "Phone Number",
              placeholder: "Enter your Phone Number",
            },
            {
              name: "password",
              label: "Password",
              placeholder: "Enter your Password",
            },
            {
              name: "confirmPassword",
              label: "Password",
              placeholder: "Enter your Confirm Password",
            },
          ]}
          formTitle="Register"
        />
        <AUChipLink baseText="Already a user ?" highlightText="Signin" href="/signin"/>
      </CTWrapper>
    </div>
  );
}
