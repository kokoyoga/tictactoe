export default function Box({ value, onSquareClick }) {
  return (
    <>
      <div
        onClick={onSquareClick}
        className="w-20 h-20 content-center text-center border-2 rounded-2xl"
      >
        {value}
      </div>
    </>
  );
}
