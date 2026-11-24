function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="grid grid-cols-2 gap-5 animate-spin w-fit px-4 py-4 [animation-duration:0.4s]">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        <span className="h-3 w-3 rounded-full bg-blue-500"></span>
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
      </div>
    </div>
  );
}

export default Spinner;
