import axios from "axios";

const plain = () => null;

export const getServerSideProps = async ({ res, req }) => {
	res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
	res.setHeader('X-Author', 'vanyatsar');
	res.setHeader('Access-Control-Allow-Origin', '*');
	const requrl = req.url.split('/');
	const id = requrl[2];
	if (id && !isNaN(id)) {
		const response = await axios.get(`https://nd.kodaktor.ru/users/${id}`);
		const { data } = response;
		res.end(data?.login);
	}
  return { props: {} };
}

export default plain;