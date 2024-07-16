import Main from "./components/Main";
import { CombatProvider } from "./context/CombatContext";

const App = () => {
  return (
    <CombatProvider>
      <Main />
    </CombatProvider>
  );
};

export default App;
