import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const paths = [
	{
		title: "Expertise Across the Tech Spectrum",
		description:
			"From front-end magic to back-end wizardry, we've got you covered at every layer of development.",
		color: "bg-blue-100",
	},
	{
		title: "Proven Track Record of Success",
		description:
			"We've delivered hundreds of projects that exceed expectations and drive real business results.",
		color: "bg-accent/20",
	},
	{
		title: "Collaborative Approach to Development",
		description:
			"We embed in your team, becoming a working collaborator to ensure alignment and success.",
		color: "bg-primary/20",
	},
	{
		title: "Innovative Solutions Tailored to You",
		description: "We craft solutions that are as unique as your business needs.",
		color: "bg-green-100",
	},
	{
		title: "Dedicated Support Every Step",
		description:
			"Our team is here to support you from concept to completion and beyond.",
		color: "bg-yellow-100",
	},
];

const PathCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-rotation logic
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % paths.length);
		}, 3000); // Rotate every 5 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? paths.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % paths.length);
	};

	return (
		<section className="py-20 px-4">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-2 text-black">
						Choose Us: Your Path to Innovation and
					</h2>
					<h2 className="text-4xl font-bold text-accent">Success</h2>
				</div>

				<div className="relative overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
							width: `${paths.length * 100}%`,
						}}
					>
						{paths.map((path, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-full"
								style={{ width: "100%" }}
							>
								<Card className={`${path.color} text-black border-0`}>
									<CardContent className="p-8 space-y-4 min-h-[200px] flex flex-col justify-center">
										<h3 className="font-bold text-xl text-black">{path.title}</h3>
										<p className="text-black/90">{path.description}</p>
									</CardContent>
								</Card>
							</div>
						))}
					</div>

					<div className="flex justify-center gap-4 mt-8">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={handlePrev}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="rounded-full"
							onClick={handleNext}
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PathCarousel;
