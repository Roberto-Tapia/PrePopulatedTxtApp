const Embedded =  (props) => {
    return (
        <div className="embedded">   
            <form>
                <span>{`<code />`}</span>
                <textarea name="txtMessage" cols="30" rows="8" readOnly="true" value={`href="sms:${props.value}/?&amp;body=I'd like to book an appointment"`}></textarea>
                <button onClick={props.handleClick} placeholder="Click"></button>
            </form>
        </div>
    )
}

export default Embedded