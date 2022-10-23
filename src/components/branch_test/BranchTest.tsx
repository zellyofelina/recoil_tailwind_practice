import ChildBranch from "./ChildBranch";

const BranchTest = (): JSX.Element => {
  return (
    <div className="text-emerald-400 text-center text-9xl">
      Branch Test
      <ChildBranch/>
    </div>
  )
}

export default BranchTest