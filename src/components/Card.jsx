function Card({ children, title, bgColor }) {
  return (
    <div className={`w-full p-6 rounded-3xl shadow ${bgColor}`}>
      {children}
    </div>
  );
}
export default Card;
