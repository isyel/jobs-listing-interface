function Footer() {
	return (
		<div className="mt-4 bg-white grid md:grid-cols-4 px-3">
			<div className="md:col-span-2 mb-3">
				<h2 className="font-bold md:mb-2 mb-1">About Us</h2>
				<p>Lorem ipsume</p>
			</div>
			<div className="md:col-span-1 mb-3">
				<h2 className="font-bold md:mb-2 mb-1">SiteMap</h2>
				<ul>
					<li>Nurses</li>
					<li>Employees</li>
					<li>Nurses</li>
					<li>Social Networking</li>
					<li>Jobs</li>
				</ul>
			</div>
			<div className="md:col-span-1 mb-3">
				<h2 className="font-bold md:mb-2 mb-1">Privacy</h2>
				<ul>
					<li>Terms</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
