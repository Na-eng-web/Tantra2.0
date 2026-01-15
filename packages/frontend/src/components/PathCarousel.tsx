"use client";

import { useState, useEffect, useRef } from "react";
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
	const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned last slide at position 0
	const [isClient, setIsClient] = useState(false);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(true);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Hydration safety
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Auto-rotation logic with improved timing and pause on interaction
	useEffect(() => {
		if (!isClient || !isAutoPlaying) return;

		intervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}, 6000); // Rotate every 6 seconds (slower for better readability)

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isClient, isAutoPlaying]);

	// Handle infinite loop wrapping
	useEffect(() => {
		if (currentIndex === paths.length + 1) {
			// Jump to real first slide when reaching cloned first slide at end
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(1);
			}, 1000);
			return () => clearTimeout(timer);
		}

		if (currentIndex === -1) {
			// Jump to real last slide when going before cloned last slide at start
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setCurrentIndex(paths.length);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [currentIndex]);

	const handlePrev = () => {
		setIsAutoPlaying(false);
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => prevIndex - 1);
		// Resume autoplay after 8 seconds
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};

	const handleNext = () => {
		setIsAutoPlaying(false);
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => prevIndex + 1);
		// Resume autoplay after 8 seconds
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};

	if (!isClient) {
		return null; // Prevent hydration mismatch
	}

	return (
		<section className="py-20 px-4">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-2 text-black">
						Choose Us: Your Path to Innovation and
					</h2>
					<h2 className="text-4xl font-bold text-accent">Success</h2>
				</div>

				<div className="relative flex items-center justify-center gap-4 mx-auto max-w-6xl">
					{/* Left Button */}
					<Button
						variant="outline"
						size="icon"
						className="rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors flex-shrink-0"
						onClick={handlePrev}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>

				{/* Carousel Container */}
				<div className="flex-1 overflow-hidden rounded-lg">
					<div
						className={`flex transition-transform ${isTransitioning ? 'duration-1000 ease-in-out' : 'duration-0'}`}
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
							width: `${(paths.length + 2) * 100}%`,
						}}
					>
						{/* Clone last slide at start */}
						<div className="flex-shrink-0 w-full px-2" style={{ minWidth: "100%" }}>
							<Card className={`${paths[paths.length - 1].color} text-black border-0 shadow-lg hover:shadow-xl transition-shadow h-full`}>
								<CardContent className="p-6 space-y-3 min-h-[180px] flex flex-col justify-center">
									<h3 className="font-bold text-lg text-black leading-tight">{paths[paths.length - 1].title}</h3>
									<p className="text-sm text-black/85 leading-relaxed">{paths[paths.length - 1].description}</p>
								</CardContent>
							</Card>
						</div>

						{/* Original slides */}
						{paths.map((path, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-full px-2"
								style={{ minWidth: "100%" }}
							>
								<Card className={`${path.color} text-black border-0 shadow-lg hover:shadow-xl transition-shadow h-full`}>
									<CardContent className="p-6 space-y-3 min-h-[180px] flex flex-col justify-center">
										<h3 className="font-bold text-lg text-black leading-tight">{path.title}</h3>
										<p className="text-sm text-black/85 leading-relaxed">{path.description}</p>
									</CardContent>
								</Card>
							</div>
						))}

						{/* Clone first slide at end */}
						<div className="flex-shrink-0 w-full px-2" style={{ minWidth: "100%" }}>
							<Card className={`${paths[0].color} text-black border-0 shadow-lg hover:shadow-xl transition-shadow h-full`}>
								<CardContent className="p-6 space-y-3 min-h-[180px] flex flex-col justify-center">
									<h3 className="font-bold text-lg text-black leading-tight">{paths[0].title}</h3>
									<p className="text-sm text-black/85 leading-relaxed">{paths[0].description}</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>					{/* Right Button */}
					<Button
						variant="outline"
						size="icon"
						className="rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors flex-shrink-0"
						onClick={handleNext}
						aria-label="Next slide"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</div>

				{/* Indicator dots */}
				<div className="flex justify-center gap-2 mt-8">
					{paths.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								setIsAutoPlaying(false);
								setIsTransitioning(true);
								setCurrentIndex(index + 1); // +1 because cloned last slide is at position 0
								setTimeout(() => setIsAutoPlaying(true), 8000);
							}}
							className={`h-3 rounded-full transition-all duration-300 ${
								index + 1 === currentIndex
									? "bg-accent w-8"
									: "bg-gray-300 w-3 hover:bg-gray-400"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PathCarousel;
