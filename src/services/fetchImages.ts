export async function fetchImages(): Promise<any> {
	const res = await fetch(
		'https://gist.githubusercontent.com/lilla-nemeth/888f537b4a9f52ddd97a369948b74c0a/raw/97f179c8fc37a8ba0ce1b0c891f102bc9cb32448/images.json'
	);

	if (!res.ok) {
		throw new Error('Fetching images has failed');
	}

	const data = await res.json();
	return data;
}
