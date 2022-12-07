import React from 'react'
import "./fillReport.scss"
const FillReport = () => {
    return (
        <div className="fillReport">
            FillReport
            <div>
             <p>Interview Date:</p>   
            <input type= "date"/>
            </div>
            <div>
            <label for="phase">Phase:</label>

                    <select name="phase" id="phase">
                    <option value="cv">CV</option>
                    <option value="hr">HR</option>
                    <option value="technical">Technical</option>
                    <option value="final">Final</option>
                    </select>

            </div>
            <div>
            <label for="status">Status:</label>

                <select name="status" id="status">
                <option value="passed">Passed</option>
                <option value="declined">Declined</option>
                </select>
            </div>
            <div>
                <p>Notes:</p>
                <input type="textarea"/>
            </div>
            <div>
                <button>BACK</button>
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default FillReport
