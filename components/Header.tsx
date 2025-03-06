import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { ModeToggle } from "./ModeToggle"


function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <ModeToggle />
    </header>
  )
}
export default Header