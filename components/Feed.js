import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import {  useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
      {/* left section  */}
      <section className="col-span-2">
        {/* stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-block h-20 sticky top-14">
          <div>
            <MiniProfile />
            <Suggestions />
          </div>

          {/* suggestions */}
        </section>
      )}
    </main>
  );
}

export default Feed;
