const Main =  (props) => {
    

    return (
        <div className="MainSection">   
            <form>
                <span>Phone Number</span>
                <input 
                type="tel" 
                name="number" 
                placeholder="Enter Number Here" 
                className="center-placeholder"
                onChange={props.handleChange}
                />
                <span>Txt Message</span>
                <textarea name="txtMessage" cols="30" rows="8"></textarea>
            </form>
        </div>
    )
}

export default Main