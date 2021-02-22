import { useState } from "react";
import Modal from "./Modal";

function SideBarCard({ header, jobs, property, showModal }) {
	const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
	let counts = {};
	jobs.forEach((job) =>
		job.items.forEach((item) => {
			if (Array.isArray(item[property]))
				return item[property].forEach(
					(itemArrayElement) =>
						(counts[itemArrayElement] = 1 + (counts[itemArrayElement] || 0))
				);
			else return (counts[item[property]] = 1 + (counts[item[property]] || 0));
		})
	);
	let propCountNames = Object.getOwnPropertyNames(counts);

	return (
		<div className="p-2 flex flex-col bg-white my-2 rounded-md">
			<h1 className="font-semibold pb-2">{header}</h1>
			{propCountNames.map((item, key) => {
				if (key < 10)
					return (
						<div className="pb-2" key={key}>
							<span className="pr-2">{item}</span>
							<span className="text-gray-400">{counts[item]}</span>
						</div>
					);
			})}
			{propCountNames.length > 10 ? (
				<button
					className="cursor-pointer text-blue-500"
					onClick={() => setModalVisibleStatus(true)}>
					See more
				</button>
			) : (
				""
			)}
			<Modal
				data={propCountNames}
				visible={modalVisibleStatus}
				header={header}
				counts={counts}
				setModalVisibleStatus={setModalVisibleStatus}
			/>
		</div>
	);
}

export default SideBarCard;
