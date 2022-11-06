const plain = () => null;

// import react from "react"


export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
	res.setHeader('X-Author', 'vanyatsar');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(`<!doctype html><html lang="en"><head><meta charset="utf-8" /><title></title><link rel="stylesheet" href="style.css" /></head><body><input type="test" id="inp"></input><button id="bt" onclick="(() => {const inputValue = document.querySelector('#inp'); fetch(inputValue.value).then(r => r.text().then(x => inputValue.value = x))})()">Btn</button></body></html>`);
  return { props: {} };
}

export default plain;

// function MyApp() {
// 	const [inputValue, setInputValue] = react.useState('')
// 	const clickHandler = () => {
// 		fetch(inputValue).then(r => r.text()).then(x => setInputValue(x))
// 	}
// 	return <div>
// 		<input type="text" id="inp" value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
// 		<button id="bt" onClick={clickHandler}>Btn</button>
// 	</div>
// }

// export default MyApp
