//API 1: https://omdbapi.com/?s=fast&apikey=1de8a72c

function testFunction(event) {
    console.log(event.target.value) 
}

function App() {
async function fetchData() {
   try {
    const res = await fetch(`https://omdbapi.com/?s=fast&apikey=1de8a72c`
    )
    const data = res.json();
    return data;
}   catch (err) {
    console.log(err)
}
}
useEffect ( ()=>{
    console.log(fetchData())
}, []);
}