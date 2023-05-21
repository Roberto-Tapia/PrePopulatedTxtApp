const Embedded =  () => {
    return (
        <div className="embedded">   
            <form>
                <span>{`<code />`}</span>
                <textarea name="txtMessage" cols="30" rows="8"></textarea>
                <button></button>
            </form>
        </div>
    )
}

export default Embedded