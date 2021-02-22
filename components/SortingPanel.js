function SortingPanel({ jobs, ascDir, orderBy, changeOrder }) {
	let totalJobs = jobs.reduce((sum, job) => sum + job.items.length, 0);

	return (
		<div className="grid md:grid-cols-5 py-3 ">
			<span className="md:col-span-2">
				<span className="font-semibold">{totalJobs}</span> job postings
			</span>
			<div className="md:col-span-3 grid md:grid-cols-8 hidden md:block">
				<span className="md:col-span-1">Sort by</span>
				<ul className="md:col-span-7 flex flex-row justify-between">
					<li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("name")}>
						Hospital
						{orderBy == "name" ? (ascDir ? "↑" : "↓") : ""}
					</li>
					<li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("city")}>
						Location
						{orderBy == "city" ? (ascDir ? "↑" : "↓") : ""}
					</li>
					<li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("job_title")}>
						Role{orderBy == "job_title" ? (ascDir ? "↑" : "↓") : ""}
					</li>
					{/* <li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("department")}>
						Department
						{orderBy == "department" ? (ascDir ? "↑" : "↓") : ""}
					</li>
					<li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("education")}>
						Education
						{orderBy == "education" ? (ascDir ? "↑" : "↓") : ""}
					</li> */}
					<li
						className="text-sm cursor-pointer"
						onClick={() => changeOrder("experience")}>
						Experience
						{orderBy == "experience" ? (ascDir ? "↑" : "↓") : ""}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SortingPanel;
