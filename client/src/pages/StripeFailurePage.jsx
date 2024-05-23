function StripeFailurePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">
        Payment Unsuccessful
      </h1>
      <p className="text-lg text-gray-800 mb-8">
        Oops! Something went wrong with your transaction. Please try again.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
        Try Again
      </button>
    </div>
  );
}

export default StripeFailurePage;
