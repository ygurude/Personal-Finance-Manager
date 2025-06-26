export default function ConfirmEmailPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-md w-full p-8 rounded-lg shadow-md bg-gray-50 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-teal-700">Confirm Your Email</h1>
        <p className="text-gray-700 text-center text-lg mb-2">
          We&apos;ve sent a confirmation link to your email address.
        </p>
        <p className="text-gray-600 text-center text-base">
          Please check your inbox and follow the link to verify your account before logging in.
        </p>
      </div>
    </section>
  );
}
