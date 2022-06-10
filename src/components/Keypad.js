function Keypad(){
    return (
            <input type="password" placeholder="Password" onChange={() => console.log("Entering password...")}></input>
    );
}

export default Keypad