import { SpotlightPreview } from "@/components/custom/Spotlights";

export default function Home() {
  return (
		<>
		<main className="h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
			<div>
				<SpotlightPreview/>
			</div>
		</main>
	  </>
  );
}
