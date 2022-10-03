const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
	res.setHeader('X-Author', 'tsarjke');
	res.setHeader('Access-Control-Allow-Origin', '*');
	const date = new Date();
	const hours = ("0" + (date.getUTCHours() + 3)).slice(-2);
  res.end(hours);
  return { props: {} };
}

export default plain;