import { createMocks } from "node-mocks-http";
import jobsApi from "../pages/api/jobs";
import jobs from "../data/jobs.json";

describe("/api/jobs", () => {
	test("returns an array of jobs", async () => {
		const { req, res } = createMocks({
			method: "GET",
		});

		await jobsApi(req, res);

		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData())).toEqual(
			expect.objectContaining({ jobs })
		);
	});

	test("returns a filtered array of jobs of length 5 when search string is 'Center'", async () => {
		const { req, res } = createMocks({
			method: "POST",
			body: {
				searchString: "Center",
				orderBy: "name",
				ascDir: 1,
			},
			headers: {
				"Content-Type": "application/json",
			},
		});

		await jobsApi(req, res);

		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData()).jobs.length).toBe(5);
	});

	test("returns 'Eastside Medical Center' as first job name, when sort(location:desc) and search string is 'Center'", async () => {
		const { req, res } = createMocks({
			method: "POST",
			body: {
				searchString: "Center",
				orderBy: "location",
				ascDir: -1,
			},
			headers: {
				"Content-Type": "application/json",
			},
		});

		await jobsApi(req, res);

		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData()).jobs[0].name).toEqual(
			"Eastside Medical Center"
		);
	});

	test("returns 'Warm Springs Medical Center' as first job name, when sort(hospital:desc)", async () => {
		const { req, res } = createMocks({
			method: "POST",
			body: {
				searchString: "",
				orderBy: "name",
				ascDir: -1,
			},
			headers: {
				"Content-Type": "application/json",
			},
		});

		await jobsApi(req, res);

		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData()).jobs[0].name).toEqual(
			"Warm Springs Medical Center"
		);
	});
});
