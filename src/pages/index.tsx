import IndexView from 'views/IndexView';
import {GetStaticProps} from "next";
import client from "../apolloConfig";
import {GET_ALL_POSTS} from "../queries";

export default function IndexPage({ allPosts, preview }): JSX.Element {
	return <IndexView allPosts={allPosts} preview={preview} />;
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const { data } = await client.query({ query: GET_ALL_POSTS });

	return {
		props: { allPosts: data?.posts, preview },
	};
};

