'use client'

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
// Components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/common/NavMenu";
import { Button } from "@/components/common/Button";
import { Avatar, AvatarImage } from "@/components/common/Avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/common/Dropdown";
// Icons
import { AiFillHome } from "react-icons/ai";
import { HiUsers, HiMenuAlt3 } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { MdContactSupport, MdOutlineSupport } from "react-icons/md";
import { BsDiscord, BsFillHeartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";

export default function Navbar () {
    const { data: session, status } = useSession();

    return (
        <div className="pt-5 px-5">
            <nav className="py-5 px-8 bg-zinc-900 w-full rounded-lg">
                <div className="flex items-center justify-between">
                    <NavigationMenu>
                        <Image 
                            src="https://widgetbot.io/logo.svg"
                            alt="WidgetBot"
                            width={50}
                            height={50}
                            className="me-8"
                        />
                        <NavigationMenuList className="hidden lg:flex">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <AiFillHome className="me-2" /> Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/games" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <IoGameController className="me-2" /> All Games
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/community" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <HiUsers className="me-2" /> Community
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>   
                            <NavigationMenuItem>
                                <Link href="/support" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <MdContactSupport className="me-2" /> Support
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden lg:flex space-x-6 items-center justify-end">
                        <Button variant="secondary">
                            Learn more
                        </Button>
                        {status === "authenticated" ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={session?.user?.image as string} />
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Favorites</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut({ redirect: false })}><FiLogOut className="mr-2 h-4 w-4" /> Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                          </DropdownMenu>                          
                        ) : (
                            <Link href="/login">
                                <Button variant="discord">
                                    <BsDiscord className="me-2" /> Sign in
                                </Button>
                            </Link>
                        )}
                    </div>
                    <div className="block lg:hidden ml-auto">
                        <button>
                            <HiMenuAlt3 className="text-2xl text-white" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};