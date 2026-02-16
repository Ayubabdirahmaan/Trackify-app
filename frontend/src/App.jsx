import { useQueries, useQuery } from "@tanstack/react-query";
import { Testpage } from "./Tastpage";
function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["User"],
    queryFn: () => 
      fetch("http://localhost:2000/api/user/AllUser").then((res) =>
        res.json(),
      ),
  });
  if (isLoading) return <h2>isloading...</h2>;
  if (error) return <h2>error..</h2>;
  return (
   <>
     <Testpage />
    <div>
     
      { data.user?.map((users) => (
        <h2>{users.name}</h2>
      ))}
    </div></>
  );
}

export default App;
