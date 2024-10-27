import { Data } from "./components/Data";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        Data: <Data />
      </div>
      <div>
        Error: <Error />
      </div>
      <div>
        Loading: <Loading />
      </div>
    </div>
  );
}
