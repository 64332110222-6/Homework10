const root = ReactDOM.createRoot(document.querySelector('#root'));

function Counter(){
    return(
        <div className = "counter">
            <button>+</button>
            <h2>0</h2>
            <button>-</button>
            <button>C</button>
            <button>X</button>
        </div>
    )
}

function App() {
    return (
    <div class = "container">
        <h1>Today: {(new Date()).toDateString()}</h1>
        <h1>Sum = 0</h1>
        <button>Add Counter</button>
        <addCounter/>
        <Counter/>
    </div>
    );
}

root.render(<App/>);