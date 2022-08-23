import { Button } from "./addbtn";
function Work({work,setWork,id,arr}){
    
    function updateResponse(event){
        const newWork=[...arr]
        newWork[id]={...work,[event.target.name]:event.target.value}
        setWork(newWork)
}
    function delResponse(event){
        setWork((arr.filter((num,index) => index !==id)))
    }

    
    
    return(
        <div>
        <form>
            <label>Role:</label><input name="role" value={work.role} type="text" onChange={updateResponse} />
            <label>Compay:</label><input name="comp" value={work.comp} type="text" onChange={updateResponse}/>
            <label>Start:</label><input name="start" value={work.start} type="text" onChange={updateResponse}/>
            <label>End:</label><input name="end" value={work.end} type="text" onChange={updateResponse}/>
            <Button onClick={delResponse} className="rem" text="Delete"/>
            
        </form>
       


        </div>
        
    )
}

export default Work;