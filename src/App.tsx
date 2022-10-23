import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import BranchTest from "./components/branch_test/BranchTest";

const App = () => {
  return (
    <div className="flex items-center columns-10">
      <TodoTemplate/>
      <BranchTest/>
    </div>
  );
}

export default App;
