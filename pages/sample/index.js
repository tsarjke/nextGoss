const plain = () => null;

export const getServerSideProps = async ({ res }) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
	res.setHeader('X-Author', 'vanyatsar');
  res.end('function task(x) { return x*this**2;}');
  return { props: {} };
}

export default plain;