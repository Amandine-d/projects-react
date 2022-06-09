// import AppExpenses from './ExpensesProject/AppExpenses';
// import AppStyling from "./StylingComponents/AppStyling";
// import AppProject1 from './Project1/AppProject1';
import './App.css';
import AppSection10 from './Section-10/AppSection10';
import { AuthContextProvider } from './Section-10/store/auth-context';

function App() {
  return (
    <div className="App">
      {/* <AppExpenses /> */}
      {/* <AppStyling /> */}
      {/* <AppProject1 /> */}
      <AuthContextProvider>
        <AppSection10 />
      </AuthContextProvider>
    </div>
  );
}

export default App;
