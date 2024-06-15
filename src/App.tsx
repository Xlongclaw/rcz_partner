import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "./screens/auth/SignInScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import UserFormScreen from "./screens/auth/UserFormScreen";
import OTPScreen from "./screens/auth/OTPScreen";
import PanelLayout from "./layouts/PanelLayout";
import Overview from "./screens/panel/Overview";
import Analytics from "./screens/panel/Analytics";
import CustomerChat from "./screens/panel/CustomerChat";
import AccountManagement from "./screens/panel/AccountManagement";
import PropertyManagement from "./screens/panel/PropertyManagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PanelLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/account-management" element={<AccountManagement />} />
          <Route path="/customer-chat" element={<CustomerChat />} />
        </Route>
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
        <Route path="/userform" element={<UserFormScreen />} />
        <Route path="/otpscreen" element={<OTPScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
