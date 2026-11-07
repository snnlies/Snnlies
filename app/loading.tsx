export default function Loading() {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center bg-white" role="status" aria-label="Loading">
      <div className="w-8 h-8 border-2 border-neutral-200 border-t-black rounded-full animate-spin"></div>
      <p className="text-neutral-500 text-xs tracking-widest uppercase mt-4">Loading</p>
    </div>
  );
}
