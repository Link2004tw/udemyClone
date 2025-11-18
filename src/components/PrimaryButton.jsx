export default function PrimaryButton({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#a435f0] hover:bg-[#7e1bc7] focus:bg-[#7e1bc7]
        text-white font-bold py-3 px-6 rounded-md
        transition-all duration-200 ease-in-out
        shadow-md hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-purple-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
