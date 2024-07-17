/* // src/App.tsx
import React, { useEffect } from 'react';
import { connect, disconnect } from './services/notificationService';
import { toast, ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  useEffect(() => {
    connect((message) => {
      console.log('Received notification:', message);
      toast.info(`New notification: ${message}`);
    });

    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default App; */




import React from 'react';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
};

export default App;
    