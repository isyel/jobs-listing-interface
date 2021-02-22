function JobDetails({ visibleStatus, ...props }) {
	return (
		<div
			className={`grid md:grid-cols-6 content-end mt-2 ${
				visibleStatus ? "block" : "hidden"
			}`}>
			<div className="md:col-span-5">
				<div className="grid md:grid-cols-2 pb-1">
					<h1 className="md:col-span-1 font-bold">Department</h1>
					<p className="md:col-span-1">
						{props.department.map((department, i) => (
							<span key={i}>
								{i > 0 ? ", " : ""}
								{department}
							</span>
						))}
					</p>
				</div>
				<div className="grid md:grid-cols-2 pb-1">
					<h1 className="md:col-span-1 font-bold">Hours/Shift</h1>
					<p className="md:col-span-1">
						{props.hours} Hours / {props.shift}
					</p>
				</div>
				<div className="grid md:grid-cols-2 pb-1">
					<h1 className="md:col-span-1 font-bold">Summary</h1>
					<p className="md:col-span-1">{props.summary}</p>
				</div>
			</div>
			<div className="md:col-span-1 flex md:flex-col flex-row align-center">
				<button className="inline-block px-3 py-2 rounded-lg bg-blue-500 text-white mr-2 md:mr-0 md:mb-2">
					Job details
				</button>
				<button className="inline-block text-blue-600 px-3 py-2 rounded-lg border border-blue-600">
					Save job
				</button>
			</div>
		</div>
	);
}

export default JobDetails;
