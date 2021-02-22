import { useState } from "react";
import Job from "./Job";

function CummulatedJobs({ hospital }) {
	const [jobsListVisibleStatus, setJobsListVisibleStatus] = useState(false);
	return (
		<div className="py-2">
			<div
				className="flex flex-row items-center mb-2 cursor-pointer"
				onClick={() => setJobsListVisibleStatus(!jobsListVisibleStatus)}>
				<div className="uppercase w-7 h-7 bg-gray-300 text-white mr-3 rounded-md text-base font-semibold text-center">
					{hospital.name.substring(0, 2)}
				</div>
				<span>
					{hospital.items.length} jobs at {hospital.name}
				</span>
			</div>

			{jobsListVisibleStatus &&
				hospital.items.map((job, key) => <Job key={key} job={job} />)}
		</div>
	);
}

export default CummulatedJobs;
