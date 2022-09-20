const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
	res.setHeader('X-Author', 'tsarjke');
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('tsarjke');
  return { props: {} };
}

export default plain;