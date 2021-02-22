import SideBarCard from "./SideBarCard";

function SideBarCardList({ jobs }) {
	return (
		<div>
			<SideBarCard header="JOB TYPE" jobs={jobs} property={"job_type"} />
			<SideBarCard header="DEPARTMENT" jobs={jobs} property={"department"} />
			<SideBarCard
				header="WORK SCHEDULE"
				jobs={jobs}
				property={"work_schedule"}
			/>
			<SideBarCard header="EXPERIENCE" jobs={jobs} property={"experience"} />
		</div>
	);
}

export default SideBarCardList;
