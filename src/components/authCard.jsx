function AuthCard({ children, title }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-800 mb-15">{title}</h2>
        {children}
      </div>
    </div>
  );
}
export default AuthCard;
