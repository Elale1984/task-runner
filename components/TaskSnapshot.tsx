function TaskSnapshot() {
  return (
    <div className="flex max-w-fit mt-10 border-4 border-foreground p-4 rounded-lg">
      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="md:text-2xl  font-bold">Open Tasks</h2>
        <h2 className="text-lime-400 md:text-6xl text-4xl">4</h2>
      </div>
      <div className="bg-foreground w-1 my-1 mx-2 "></div>
      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="md:text-2xl font-bold">Upcoming Tasks</h2>
        <h2 className="text-yellow-400 md:text-6xl text-4xl">4</h2>
      </div>
      <div className="bg-foreground w-1 my-1 mx-2 "></div>
      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="md:text-2xl font-bold">Late Tasks</h2>
        <h2 className="text-red-400 md:text-6xl text-4xl">4</h2>
      </div>
    </div>
  );
}
export default TaskSnapshot;
