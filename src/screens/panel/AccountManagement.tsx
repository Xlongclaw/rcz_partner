import CTForm from "../../components/common/CTForm";

export default function AccountManagement() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="bg-black w-28 h-28 rounded-full relative">
        <img src="images/avataar.png" className="w-full h-full" alt="" />
        <div className="absolute -right-2 -bottom-2 bg-white p-4 rounded-full">
          <img src="images/edit.png" alt="" />
        </div>
      </div>
      <CTForm
        formFields={[
          {
            label: "Your first name",
            name: "firstName",
            placeholder: "John",
          },
          {
            label: "Your last name",
            name: "lastName",
            placeholder: "Doe",
          },
          {
            label: "Your Email",
            name: "email",
            placeholder: "John@doe.com",
          },
          {
            label: "Your Address",
            name: "address",
            placeholder: "1234 Maplewood Drive Springfield, IL 62704 USA",
          },
        ]}
      />
    </div>
  );
}
