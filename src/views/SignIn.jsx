import { SignInForm } from "../components/SignInForm";

export const SignIn = () => {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                alt="Your Company"
                src="./images/pizza-logo.png"
                className="h-10 w-auto"
              />
              <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
                Entra a tu cuenta en Mamma Mia
              </h2>
              <p className="mt-2 text-sm/6 text-gray-500">
                No tienes cuenta?{" "}
                <a
                  href="#"
                  className="font-semibold text-red-600 hover:text-red-500"
                >
                  Registrate ahora!
                </a>
              </p>
            </div>

            <SignInForm />
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block lg:h-screen">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1569230516306-5a8cb5586399?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
