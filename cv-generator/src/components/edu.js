import { Button } from "./addbtn";

function Edu({edu,setEdu,id,arr}){
    function updateResponse(event){
        const newEdu=[...arr]
        newEdu[id]={...edu,[event.target.name]:event.target.value}
        setEdu(newEdu)
}
    function delResponse(event){
        
        setEdu(arr.filter((num,index) => index !==id))
    }

    return(
        <div>
        <form>
            
            
            <label>University:</label><input type="text" name="uni" onChange={updateResponse} value={edu.uni}/>
            <label>Major:</label><input type="text" name="major" onChange={updateResponse} value={edu.major}/>
            <label>Graduation Year:</label><input type="text" name="year" onChange={updateResponse} value={edu.year}/>
            <label>GPA:</label><input type="text" name="gpa" onChange={updateResponse} value={edu.gpa}/>
            <Button onClick={delResponse} className="rem" text="Delete"/>
        </form>
       


        </div>
      
        
    )
}

export default Edu;