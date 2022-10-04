import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/userDataReducer";

const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { data: [] });

  return (
    <OnboardingContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardingContext.Provider>
  );
};

const useOnboarding = () => useContext(OnboardingContext);
export { OnboardingProvider, useOnboarding };
