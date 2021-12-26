import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 md:-mt-32 -mt-20 px-14 text-center">
        <Image
          height={120}
          width={300}
          layout="fixed"
          src="https://raw.githubusercontent.com/om-prakash-yadav/links/main/instagram-logo.png"
          alt="instagram" 
        />
        <p className="text-xs md:text-sm italic text-gray-400">
          Sign up to see photos and videos from your friends
        </p>
        <div className="mt-32 ">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-1 px-3 md:py-3 bg-blue-500 text-white rounded-full focus:ring-2 ring-blue-300"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
              <div className="absolute bottom-4">
                <p className="text-xs text-gray-400">from</p>
                <p className="text-sm font-bold">OM PRAKASH YADAV</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
