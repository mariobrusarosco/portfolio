"use client";
import { KNOWLEDGE } from "@/domain/knowledge/constants";
import { useParams, useRouter } from "next/navigation";

export default function KnowledgeScreen() {
  const knowledgeId = useParams()["slug"];
  const { back } = useRouter();
  const knowledge = KNOWLEDGE.find((k) => k.id === knowledgeId);

  if (!knowledge) return null;

  return (
    <div
      data-ui="knowledge-screen"
      className="hidden rounded py-8 px-6 absolute top-0 left-0 min-h-[300px] backdrop-filter 
  backdrop-blur-md 
  bg-opacity-10 desktop:bg-transparent"
    >
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-josefin text-teal-500">
          {knowledge.label}
        </h2>

        <div
          className="flex gap-1 justify-between items-center  cursor-pointer"
          onClick={back}
        >
          <p className="uppercase text-pink-100 text-xs">back</p>
          <div className="w-5 h-5 border border-teal-500 p-1 rounded-full">
            <svg
              viewBox="0 0 7 7"
              className="stroke-active-primary"
              fill="none"
              strokeWidth="0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <p className="text-rose-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          quasi optio, eos dolor ducimus quos velit! Quidem sequi placeat ipsa
          est. Dicta fugiat, minus voluptate cumque ea sed aperiam eos.
        </p>
      </div>
    </div>
  );
}
