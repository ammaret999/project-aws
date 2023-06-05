import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2"></div>

      <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
        <div className="flex justify-center mt-5">
          <p className="text-2xl">Create Name</p>
        </div>

        <form>
          <div className="grid gap-6 mb-6 grid-cols-1 m-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="topic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mb-3">
            <div className="col-span-12 justify-items-center grid">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-span-2"></div>
    </div>
  );
}

export default App;
