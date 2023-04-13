import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import AddRecordForm from "./components/addRecordsForm";
import PhoneBookRecords from "./components/phoneBooksRec";
import RecordsDataContextProvider from "./providers/recordsDataProvider";
import LoginForm from "./components/loginForm";
import AuthProvider from "./providers/authProvider";
import LogOut from "./components/logOut";




function App() {
  return (
      <AuthProvider>
          <LoginForm/>
          <RecordsDataContextProvider>
              <LogOut/>
             <div className="App">
                Demo
                <AddRecordForm />
                 <PhoneBookRecords />
             </div>
          </RecordsDataContextProvider>
      </AuthProvider>
  );
}

export default App;
