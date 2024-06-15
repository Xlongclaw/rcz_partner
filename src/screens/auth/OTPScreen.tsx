import AUChipLink from "../../components/auth/AUChipLink";
import AUOtpInput from "../../components/auth/AUOtpInput";
import CTWrapper from "../../components/common/CTWrapper";

export default function OTPScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5FAF8]">
      <CTWrapper>
        <p className="text-2xl font-bold">Enter OTP</p>
        <AUOtpInput />
        <button className="bg-[#10B981] p-4 w-full text-white rounded-xl">
          Continue
        </button>
        <AUChipLink baseText="Not received?" highlightText="Resend" />
      </CTWrapper>
    </div>
  );
}
