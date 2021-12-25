import {signOut, useSession} from "next-auth/react"
function MiniProfile() {
  const {data: session} = useSession();
  console.log(session);

  return (
    <div className="flex items-center justify-between ml-10 mt-14">
      <img
        className="h-16 w-16 rounded-full border p-[2px] object-center object-cover"
        src={session?.user?.image}
        alt="error loading image"
      />
      <div className="flex-1 mx-4">
          <h2 className="font-bold">{session?.user?.username}</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instagram -  2.0</h3>
      </div>
      <button onClick={signOut} className="font-semibold text-blue-400">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
