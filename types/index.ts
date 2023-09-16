export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export type CarState = CarProps[] & { message?: string };

export interface FilterProps {
	manufacturer?: string;
	year?: number;
	model?: string;
	limit?: number;
	fuel?: string;
}

export interface CarCardProps {
	model: string;
	make: string;
	mpg: number;
	transmission: string;
	year: number;
	drive: string;
	cityMPG: number;
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
	setLimit: (limit: number) => void;
}
