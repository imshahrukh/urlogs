export default function Button({text, className}) {
  return (
    <>
    <button className={`bg-none border border-primary hover:bg-[#4592FF] hover:text-white py-2 px-4 rounded-md min-w-[150px] text-lg block ${className}`}>{text}</button>
    </>
  )
}
