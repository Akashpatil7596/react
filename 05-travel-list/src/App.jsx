const arr = [
    { name: "Jonas", age: 26 },
    { name: "Dave", age: 21 },
];

function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <ul>
                {arr?.length &&
                    arr?.map((e) => (
                        <li>
                            <p>{e.name}</p>
                        </li>
                    ))}
            </ul>
            <img
                src="https://nestjs-my-bucket.s3.ap-south-1.amazonaws.com/users/pexels-infonautica-15053187.jpg"
                alt="pexels-infonautica-15053187.jpg"
                style={{ borderRadius: "15px" }}
            />
        </>
    );
}

export default App;
