import Head from 'next/head';

import PageExample from '../src/containers/PageExample';
import App from 'src';

function Example() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<App />
		</div>
	);
}

export default Example;
