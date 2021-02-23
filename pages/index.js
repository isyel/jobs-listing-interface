import { useEffect, useState } from "react";
import CummulatedJobs from "../components/CummulatedJobs";
import SideBarCardList from "../components/SideBarCardList";
import SortingPanel from "../components/SortingPanel";
import jobs from "../data/jobs";

const Index = ({ apiResponse }) => {
	const [searchString, setSearchString] = useState("");
	const [orderBy, setOrderBy] = useState(null);
	const [ascDir, setAscDir] = useState(true);
	const [filteredJobs, setFilteredJobs] = useState(apiResponse);

	useEffect(() => {
		const searchValue = searchString ? searchString.toLowerCase() : "";
		const orderByValue = orderBy ? orderBy : "name";
		const ascDirValue = ascDir ? 1 : -1;
		let jobsToFilter = JSON.parse(JSON.stringify(jobs));

		console.log("filteredJobs before search", filteredJobs);
		console.log("jobsToFilter before search", jobsToFilter);

		jobsToFilter = jobsToFilter.filter((jobs) => {
			jobs.items = jobs.items
				.filter((item) => {
					return (
						item["description"].toLowerCase().includes(searchValue) ||
						item["city"].toLowerCase().includes(searchValue) ||
						item["work_schedule"].toLowerCase().includes(searchValue) ||
						item["job_type"].toLowerCase().includes(searchValue) ||
						item["job_title"].toLowerCase().includes(searchValue) ||
						item["name"].toLowerCase().includes(searchValue) ||
						searchValue === ""
					);
				})
				.sort((item1, item2) => {
					//
					return item1[orderByValue].toLowerCase() <
						item2[orderByValue].toLowerCase()
						? -1 * ascDirValue
						: item1[orderByValue].toLowerCase() >
						  item2[orderByValue].toLowerCase()
						? 1 * ascDirValue
						: 0;
				});

			return jobs.items.length > 0;
		});

		if (orderByValue === "name") {
			jobsToFilter = jobsToFilter.sort((job1, job2) => {
				return job1.name.toLowerCase() < job2.name.toLowerCase()
					? -1 * ascDirValue
					: job1.name.toLowerCase() > job2.name.toLowerCase()
					? 1 * ascDirValue
					: 0;
			});
		}

		console.log("before setting jobsToFilter to filteredjobs", {
			jobsToFilter,
		});

		setFilteredJobs({ jobs: jobsToFilter });

		console.log("filteredJobs after search", filteredJobs);
		console.log("jobsToFilter after search", jobsToFilter);
	}, [searchString, orderBy, ascDir]);

	function changeOrder(order) {
		setOrderBy(order);
		setAscDir(!ascDir);
	}

	return (
		<div className="p-3 bg-gray-100">
			<div className="mt-2 relative rounded-md shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fillRule="evenodd"
						clipRule="evenodd">
						<path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
					</svg>
				</div>
				<input
					type="search"
					name="search"
					className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 py-3 pr-12 sm:text-sm border-gray-300 rounded-md"
					placeholder="Search for any job, title, keywords or company"
					onChange={(e) => setSearchString(e.target.value)}
				/>
			</div>
			<div className="grid md:grid-cols-4">
				<div className="md:col-span-1 hidden md:block">
					<SideBarCardList jobs={filteredJobs?.jobs} />
				</div>
				<div className="bg-white my-2 md:ml-3 md:col-span-3 p-3 rounded-md">
					{/* {errorMessage && (
						<div className="text-orange-400">{errorMessage}</div>
					)} */}
					<SortingPanel
						jobs={filteredJobs?.jobs}
						changeOrder={changeOrder}
						orderBy={orderBy}
						ascDir={ascDir}
					/>
					{filteredJobs?.jobs?.map((hospital, key) => (
						<CummulatedJobs key={key} hospital={hospital} />
					))}

					{filteredJobs?.jobs < 1 ? (
						<h2 className="pt-10 text-orange-600 font-bold">No Jobs Found</h2>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export const getStaticProps = async () => {
	let apiResponse = { jobs };

	return {
		props: {
			apiResponse,
		},
	};
};

export default Index;
