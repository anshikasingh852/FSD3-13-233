const Hello = () => {
  return <h2>Welcome to React 19</h2>;
};

const Book = () => {
  return (
    <>
      <h1 className="text-red-600 text-3xl">Let's React </h1>
      <h2>price:699 </h2>
      <h3>rating: 4.5 </h3>;
    </>
  );
};

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 text-center">
        {" "}
        Hello World{" "}
      </h1>
      <Hello />
      <Book />
    </>
  );
}
