export async function fetchImages(): Promise<any> {
	const res = await fetch(
		'https://gist.githubusercontent.com/lilla-nemeth/888f537b4a9f52ddd97a369948b74c0a/raw/073736e988c1204c6f5d1b437f30f5d011379090/images.json'
	);

	if (!res.ok) {
		throw new Error('Fetching images has failed');
	}

	const data = await res.json();
	return data;
}
