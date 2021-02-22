import jobs from "../../data/jobs";

export default async (req, res) => {
	res.statusCode = 200;

	let filteredJobs = JSON.parse(JSON.stringify(jobs));
	// @todo: implement filters and search
	if (req.method === "POST") {
		const requestBody = req.body;
		const searchString = requestBody.searchString.toLowerCase();
		const orderBy = requestBody.orderBy;
		const ascDir = requestBody.ascDir;

		filteredJobs = filteredJobs.filter((jobs) => {
			jobs.items = jobs.items
				.filter((item) => {
					return (
						item["description"].toLowerCase().includes(searchString) ||
						item["city"].toLowerCase().includes(searchString) ||
						item["work_schedule"].toLowerCase().includes(searchString) ||
						item["job_type"].toLowerCase().includes(searchString) ||
						item["job_title"].toLowerCase().includes(searchString) ||
						item["name"].toLowerCase().includes(searchString) ||
						searchString === ""
					);
				})
				.sort((item1, item2) => {
					//
					return item1[orderBy].toLowerCase() < item2[orderBy].toLowerCase()
						? -1 * ascDir
						: item1[orderBy].toLowerCase() > item2[orderBy].toLowerCase()
						? 1 * ascDir
						: 0;
				});

			return jobs.items.length > 0;
		});

		if (orderBy === "name") {
			filteredJobs = filteredJobs.sort((job1, job2) => {
				return job1.name.toLowerCase() < job2.name.toLowerCase()
					? -1 * ascDir
					: job1.name.toLowerCase() > job2.name.toLowerCase()
					? 1 * ascDir
					: 0;
			});
		}
	}

	// @todo: implement automated tests

	// this timeout emulates unstable network connection, do not remove this one
	// you need to figure out how to guarantee that client side will render
	// correct results even if server-side can't finish replies in the right order
	await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

	res.json({ jobs: filteredJobs });
};
