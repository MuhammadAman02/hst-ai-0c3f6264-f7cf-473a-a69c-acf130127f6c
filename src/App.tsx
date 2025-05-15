import React from 'react';
import ChatInterface from './components/ChatInterface';
import NewsTicker from './components/NewsTicker';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-navy text-white">
      <header className="bg-lightBlue text-navy p-4">
        <h1 className="text-2xl font-bold">Current Affairs Chatbot</h1>
      </header>
      <NewsTicker />
      <main className="flex-grow overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;