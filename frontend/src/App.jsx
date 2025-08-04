import MatchList from './components/MatchList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center p-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 mb-8 drop-shadow">
        IPL Live Score Dashboard 🏏
      </h1>
      <div className="w-full max-w-4xl">
        <MatchList />
      </div>
    </div>
  );
}

export default App;
