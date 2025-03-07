import OpenTasks from "@/components/TaskSnapshot";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Revalia } from "next/font/google";

const revaliaFont = Revalia({
  weight: "400",
});

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className={`text-4xl font-bold ${revaliaFont.className}`}>
          Welcome to Task Runner
        </h1>
        <p className="text-lg mt-4">
          Please <a href="/sign-in">sign in</a> to continue
        </p>
      </div>
    );
  }

  const user = await currentUser();

  return (
    <div className="container mx-auto p-4 flex flex-col md:items-center md:justify-center">
      <p className="mt-4">Welcome {user?.firstName}</p>
      <h1 className={`text-6xl font-bold font-serif ${revaliaFont.className}`}> Task Runner</h1>
      <OpenTasks />
    </div>
  );
}
