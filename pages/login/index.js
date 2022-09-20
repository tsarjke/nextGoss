const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('author', 'admin');
  res.end('admin');
  return { props: {} };
}

export default plain;