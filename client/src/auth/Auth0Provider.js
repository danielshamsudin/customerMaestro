import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-ec4i4trwsdu165uk.us.auth0.com"
      clientId="vVh7xg469baCOXXaAXaRX0sW5gqAMhKN"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
