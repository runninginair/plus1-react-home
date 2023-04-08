import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./user-reducer";

function ProfileScreenDemo() {
    // setProfile will only change the local data NOT globle.
    // const [profile, setProfile] = useState({
    //     firstName: "jin",
    //     lastName: "John",
    //     email: "jin@gmail.com",
    //     phone: "123-123-1234",
    //     address: "123 main st"
    // });

    /**
     * Instead of store the data here, we gonna use "useSelector"
     * to grab the data from the store. as followings,
     */
    const {user} = useSelector((state) => state.user);
    const {count} = useSelector((state) => state.counter);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    }

    return (
        <div>
            <h1>
                <button
                    onClick={handleSaveButton}
                    className="btn btn-primary float-end">Save</button>
                Profile Screen Demo
            </h1>

            <label>First Name</label><br />
            <input
                value={profile.firstName}
                onChange={(e) => setProfile({
                    ...profile,
                    firstName: e.target.value,
                })} /><br /><br />

            <label>Last Name</label><br />
            <input value={profile.lastName}
                onChange={(e) => setProfile({
                    ...profile,
                    lastName: e.target.value,
                })} /><br /><br />

            <label>Email</label><br />
            <input
                value={profile.email}
                onChange={(e) => setProfile({
                    ...profile,
                    email: e.target.value,
                })} /><br /><br />

            <label>Phone</label><br />
            <input
                value={profile.phone}
                onChange={(e) => setProfile({
                    ...profile,
                    phone: e.target.value,
                })} /><br /><br />

            <label>Address</label><br />
            <input
                value={profile.address}
                onChange={(e) => setProfile({
                    ...profile,
                    address: e.target.value,
                })} /><br /><br />
            {profile.firstName}
            <br/><br/>
            <h2>Count from CounterDemo: {count}</h2>

        </div>


    )
}

export default ProfileScreenDemo;