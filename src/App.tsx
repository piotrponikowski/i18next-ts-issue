import './App.css';
import React from 'react';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>{t('translation.key')}</div>
    </div>
  );
}

export default App;
