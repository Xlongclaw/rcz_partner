import CTForm from "../../components/common/CTForm";

export default function PropertyManagement() {
  return (
    <div className="grid grid-cols-3 h-full gap-6">
      <div className="bg-white h-full p-6 relative">
        <div className="border-2 border-dashed w-full h-full flex justify-center items-center text-sm font-semibold text-[#CBCBCB]">
          + Add Property Images
        </div>
        <div className="absolute -top-3 -left-3 cursor-pointer bg-white w-24 h-24 flex justify-center items-center shadow-md">
          <img src="images/arrow.png" alt="" />
        </div>
      </div>
      <div className="w-full col-span-2 flex flex-col items-center ">
        <CTForm
          formFields={[
            {
              name: "propertyName",
              label: "Property Name",
              placeholder: "Enter Property Name",
            },
            {
              name: "propertyType",
              label: "Property Type",
              placeholder: "Enter Property type",
            },
            {
              name: "propertyPrice",
              label: "Property Price",
              placeholder: "Enter Property Price",
            },
            {
              name: "propertyArea",
              label: "Property Area",
              placeholder: "Enter Property Area",
            },
            {
              name: "propertyAddress",
              label: "Property Address",
              placeholder: "Enter Property Address",
            },
            {
              name: "propertydescription",
              label: "Property Description",
              placeholder: "Enter Property Description",
            },
          ]}
        />
      </div>
    </div>
  );
}
