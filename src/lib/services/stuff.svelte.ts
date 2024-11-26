import { Status } from '$lib/types/Status';
import type { Expand, Stuff, StuffBody, StuffModel } from '$lib/types/Stuff';

export function convertStuff(stuffModels: StuffModel[]): Stuff[] {
	const stuff = stuffModels.map((v) => {
		const tmpExpand: Expand = v.expand ?? {};
		console.log(v.image);
		const tmpStuffBody: StuffBody = {
			id: v.id,
			name: v.name ?? '',
			categories: tmpExpand.categories ?? [],
			location: tmpExpand.location ?? { name: '', id: '' },
			designation: tmpExpand.designation ?? { name: '', id: '' },
			image: v.image
		};
		const tmpStuff: Stuff = {
			...tmpStuffBody,
			status: calculateStatus(tmpStuffBody)
		};
		return tmpStuff;
	});
	return stuff;
}

export function calculateStatus(stuffBody: StuffBody): Status {
	let status = Status.INCOMPLETE;

	if (stuffBody.name && stuffBody.image && stuffBody.location?.id && stuffBody.designation?.id) {
		status = Status.DONE;
		if (stuffBody.location.id != stuffBody.designation.id) {
			status = Status.TRANSIT;
		}
	}
	return status;
}
