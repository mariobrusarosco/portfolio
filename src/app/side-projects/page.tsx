"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sideProjects } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";

import { SideProject } from "@/domain/side-projects/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";
import { screens } from "@/domain/shared/animations";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import animations from "@/domain/side-projects/animations";
import { Project } from "@/domain/side-projects/components/project";
import { cn } from "@/domain/shared/utils/classnames";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

export default function SideProjectRootScreen() {
  return (
    <div
      data-ui="side-projects-root-screen"
      className="flex flex-col h-full flex-1 pt-20 lg:pt-0"
    >
      <p className="text-pink-100 text-4xl font-thin lowercase">
        Please select a side project on the navbar
      </p>
    </div>
  );
}
