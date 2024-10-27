import { useJsonFetch } from "../../hooks/useJsonFetch";

export const Error = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error", {});
  return (
    <div className="fetch-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
};