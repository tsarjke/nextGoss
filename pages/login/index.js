const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
	res.setHeader('X-Author', 'vanyatsar');
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('vanyatsar');
  return { props: {} };
}

export default plain;