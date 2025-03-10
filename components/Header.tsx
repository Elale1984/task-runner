import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { ModeToggle } from "./ModeToggle"


function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
              <ModeToggle />
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>

    </header>
  )
}
export default Header