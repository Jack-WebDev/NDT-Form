
"use client";
import React, {useEffect, FormEvent} from "react";
import axios from "axios";



export default function LoginPage() {
    const [user, setUser] = React.useState({
      propertyID:"", propertyAddress: "",bankDetailsChange:false, propertyOwnershipChange:false, accountNameChange:false,otherChange:false, propertyName: "", changeRequired: "", changeDescriptonDetails: "", reasonForChange: "",desiredOutcome: "", requestorID: "", requestorName: "", requestorJobTitle: "",date: "", urgently: false,urgent:false,routine:false, uploads: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onSubmit = async (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response = await axios.post("/api/users", user);
            console.log("Submission success", response.data);
        } catch (error:any) {
            console.log("Submission failed", error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.propertyID.length > 0 && user.propertyAddress.length > 0 && user.propertyName.length > 0 && user.changeRequired.length > 0 && user.changeDescriptonDetails.length > 0 && user.reasonForChange.length > 0 && user.desiredOutcome.length > 0 && user.requestorID.length > 0 && user.requestorName.length > 0 && user.requestorJobTitle.length > 0 && user.date.length > 0 && user.uploads.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl mb-5">{loading ? "Processing" : "Change Request Form"}</h1>
        <hr />
        

        <label htmlFor="propertyID">Property ID</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="propertyID"
            type="text"
            value={user.propertyID}
            onChange={(e) => setUser({...user, propertyID: e.target.value})}
            placeholder="Enter Property ID"
        />

        <label htmlFor="propertyName">Property Name</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="propertyName"
            type="text"
            value={user.propertyName}
            onChange={(e) => setUser({...user, propertyName: e.target.value})}
            placeholder="Enter Property Name"
        />

        <label htmlFor="propertyAddress">Property Address</label>
        <textarea 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="propertyAddress"
            value={user.propertyAddress}
            onChange={(e) => setUser({...user, propertyAddress: e.target.value})}
            placeholder="Enter Property Address"
        />


        <label htmlFor="changeRequired">Change Required</label>
        <textarea 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="changeRequired"
            value={user.changeRequired}
            onChange={(e) => setUser({...user, changeRequired: e.target.value})}
            placeholder="Tell us the change you required"
        />


        <label htmlFor="changeDescriptonDetails">Change Descripton Details</label>
        <textarea 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="changeDescriptonDetails"
            value={user.changeDescriptonDetails}
            onChange={(e) => setUser({...user, changeDescriptonDetails: e.target.value})}
            placeholder="Tell us the change descripton details"
        />


        <label htmlFor="desiredOutcome">Desired Outcome (by Property Owner or Requestor)</label>
        <textarea
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="desiredOutcome"
            value={user.desiredOutcome}
            onChange={(e) => setUser({...user, desiredOutcome: e.target.value})}
            placeholder="Tell us the desired outcome (by Property Owner or Requestor)"
        />


        <label htmlFor="requestorID">Requestor ID</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="requestorID"
            type="text"
            value={user.requestorID}
            onChange={(e) => setUser({...user, requestorID: e.target.value})}
            placeholder="Enter Requestor's ID"
        />


        <label htmlFor="requestorName">Requestor Name</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="requestorName"
            type="text"
            value={user.requestorName}
            onChange={(e) => setUser({...user, requestorName: e.target.value})}
            placeholder="Enter Requestor's Name"
        />
        <label htmlFor="requestorJobTitle">Requestor Job Title (Role at the Property)</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="requestorJobTitle"
            type="text"
            value={user.requestorJobTitle}
            onChange={(e) => setUser({...user, requestorJobTitle: e.target.value})}
            placeholder="Enter Requestor Job Title (Role at the Property)"
        />

        <h2>Tick the Change Type Required:</h2>
        <div className="options">

        <div className="bank">
        <label htmlFor="bankDetailsChange">Bank Details Change</label>
        <input type="checkbox" name="bankDetailsChange" id="bankDetailsChange" checked={user.bankDetailsChange} onChange={(e) => setUser({...user, bankDetailsChange: e.target.checked})} />
        </div>

        <div className="property">
        <label htmlFor="propertyOwnershipChange">Property Ownership Change</label>
        <input type="checkbox" name="propertyOwnershipChange" id="propertyOwnershipChange" checked={user.propertyOwnershipChange} onChange={(e) => setUser({...user, propertyOwnershipChange: e.target.checked})}/>
        </div>

        <div className="account">
        <label htmlFor="accountNameChange">User Account Name Change</label>
        <input type="checkbox" name="accountNameChange" id="accountNameChange" checked={user.accountNameChange} onChange={(e) => setUser({...user, accountNameChange: e.target.checked})}/>
        </div>

        <div className="other">
        <label htmlFor="otherChange">Other Change</label>
        <input type="checkbox" name="otherChange" id="otherChange" checked={user.otherChange} onChange={(e) => setUser({...user, otherChange: e.target.checked})}/>
        </div>
        </div>



        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" value={user.date} onChange={(e) => setUser({...user, date: e.target.value})}/>

        <h2>Priority</h2>

<div className="priority">

        <div className="urgent">

        <label htmlFor="urgetly">Urgently</label>
        <input type="checkbox" name="urgetly" id="urgetly"  checked={user.urgently} onChange={(e) => setUser({...user, urgently: e.target.checked})}/>
        </div>
        <div className="urgent">
        <label htmlFor="urgent">Urgent</label>
        <input type="checkbox" name="urgent" id="urgent" checked={user.urgent} onChange={(e) => setUser({...user, urgent: e.target.checked})} />

        </div>

        <div className="routine">
        <label htmlFor="routine">Routine</label>
        <input type="checkbox" name="routine" id="routine" checked={user.routine} onChange={(e) => setUser({...user, routine: e.target.checked})} />

        </div>
</div>

        <h2 className="mb-5">NOTE: For Property Ownership attach certified copy of new title deed, previous property owner written confirmation for reason of
ownership change, and for bank changes, attach bank confirmation letter, title deed with holder name matching the account
name and/or property owner confirmation (affidavit) of reason why account name is different. User system account name change,
property owner’s confirmation (affidavit) of change.</h2>
        <label htmlFor="uploads">Upload Files</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="uploads"
            type="file"
            value={user.uploads}
            onChange={(e) => setUser({...user, uploads: e.target.value})}
            placeholder="Choose your uploads"
        />

        <button
            onClick={onSubmit}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Submit</button>
    </div>
    )

}