import { createFileRoute, Link } from "@tanstack/react-router";
import { allSpeakers, allTalks } from "content-collections";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import HeroCarousel from "@/domains/global/components/HeroCarousel";
import RemyAssistant from "@/domains/global/components/RemyAssistant";
import SpeakerCard from "@/domains/global/components/SpeakerCard";
import TalkCard from "@/domains/global/components/TalkCard";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const featuredSpeakers = allSpeakers.slice(0, 3);
	const featuredTalks = allTalks.slice(0, 4);

	return (
		<main>
			<h2>Mario Brusarosco</h2>
		</main>
	);
}
