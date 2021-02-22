import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
		</Head>
	);
};

Meta.defaultProps = {
	title: "Full Stack Candidate Testing",
	keywords: "next.js, tailwindcss, jest testing, babel",
	description:
		"Next.js app to display data in jobs.json based on screenshots folder, and implement search and sort",
};

export default Meta;
