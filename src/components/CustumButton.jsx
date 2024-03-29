const CustumButton = ({ onClick, selected, label }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected === label
          ? "text-white border-Highlight"
          : "bg-transparent text-primary border-transparent"
      } px-6 py-2 rounded-full border text-xs sm:text-base`}
    >
      {label}
    </button>
  );
};

export default CustumButton;
