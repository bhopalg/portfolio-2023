import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
  return <div
    className="grow flex justify-center items-center mx-auto w-full hero-text-typer flex-col gap-5 px-5 relative">
    <div
      className="absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center mix-blend-difference">
      <LoadingSpinner className="w-12 h-12" />
    </div>
  </div>
}