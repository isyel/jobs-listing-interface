import { useState } from "react";
import JobDetails from "./JobDetails";
import { formatDistance, parseISO } from "date-fns";

function Job({ job }) {
	const [jobDetailsVisibleStatus, setJobDetailsVisibleStatus] = useState(false);

	return (
		<div className="border-t border-gray-200 p-3 ">
			<div
				className="flex md:flex-row justify-between md:items-center cursor-pointer flex-col"
				onClick={() => setJobDetailsVisibleStatus(!jobDetailsVisibleStatus)}>
				<div>
					<h1 className="font-bold">{job.job_title}</h1>
					<p>
						{job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an
						hour | {job.city}
					</p>
				</div>
				<span className="text-gray-500">
					{formatDistance(parseISO(job.created), new Date(), {
						addSuffix: true,
					})}
				</span>
			</div>
			<JobDetails
				visibleStatus={jobDetailsVisibleStatus}
				department={job.department}
				hours={job.hours}
				summary={job.description}
				shift={job.work_schedule}
			/>
		</div>
	);
}

export default Job;
