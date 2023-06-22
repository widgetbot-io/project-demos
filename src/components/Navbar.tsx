'use client'

import Link from "next/link";
import Image from "next/image";
// Components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/common/NavMenu";
import { Button } from "@/components/common/Button";
// Icons
import { AiFillHome } from "react-icons/ai";
import { HiUsers, HiMenuAlt3 } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";

export default function Navbar () {
    return (
        <div>
            <nav className="py-5 px-8 bg-zinc-900 w-full">
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
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <AiFillHome className="me-2" /> Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <IoGameController className="me-2" /> All Games
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <HiUsers className="me-2" /> Community
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>   
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <MdContactSupport className="me-2" /> Support
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden lg:flex space-x-4 items-center justify-end">
                        <Button variant="secondary">
                            Learn more
                        </Button>
                        <Button variant="discord">
                            <BsDiscord className="me-2" /> Sign in
                        </Button>
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