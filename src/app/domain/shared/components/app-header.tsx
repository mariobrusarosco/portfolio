import Link from "next/link"

export const AppHeader = () => {
    return (
            <header>
                <ul>
                        <li>
                        <Link href={"/"}>home</Link>
                        </li>
                        <li>
                        <Link href={"/skills"}>skills</Link>
                        </li>
                        <li>
                        <Link href={"/experience"}>experience</Link>
                        </li>
                </ul>
            </header>
    )
}