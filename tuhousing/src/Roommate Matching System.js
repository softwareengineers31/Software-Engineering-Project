import React, { useState } from 'react';
import Login from './components/Login';
import RoommateForm from './components/RoommateForm';
import MatchList from './components/MatchList';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [preferences, setPreferences] = useState(null);
  const [matches, setMatches] = useState([]);

  const handleLogin = (id) => {
    setStudentId(id);
    setLoggedIn(true);
  };

  const handleFormSubmit = (prefs) => {
    setPreferences(prefs);
    // EXAMPLE
    const mockMatches = [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 20, lifestyle: 'Quiet' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', age: 21, lifestyle: 'Social' },
    ];
    setMatches(mockMatches);
  };

  const handleSelect = (id) => {
    console.log(`Viewing profile of ID =: ${id}`);
  };

  const handleMessage = (id) => {
    console.log(`Sending message with ID =: ${id}`);
  };

  const handleFinish = () => {
    console.log('Matching Complete.');
  };

  return (
    <div>
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && !preferences && <RoommateForm onSubmit={handleFormSubmit} />}
      {preferences && (
        <MatchList
          matches={matches}
          onSelect={handleSelect}
          onMessage={handleMessage}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
};

//export default Roommate Matching System;