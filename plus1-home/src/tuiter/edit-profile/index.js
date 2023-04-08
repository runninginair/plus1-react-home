import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../profile/profile-reducer";
import { Link } from "react-router-dom";

const EditProfile = () => {

    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
        window.alert("Edit saved successfully!");
    };

    return (
        <>
            <div className="row mt-1">
                <div className="col-1">
                    <Link to="../profile" >
                        <i className="bi bi-x fs-3 mt-1 text-black"> </i>
                    </Link>
                </div>

                <h4 className="col-9 mt-2 ms-2">Edit Profile</h4>
                <button
                    onClick={handleSaveButton}
                    className="col btn btn-dark rounded-5 float-end me-4">                    
                    Save
                </button>
            </div>

            <div className="mb-5">
                <img className="img-fluid mt-2"
                    src={`/images/${profile.bannerPicture}`} alt='Banner Image' /><br />
                <img width={120} className="rounded-circle ms-3 wd-profile-avatar-style"
                    src={`/images/${profile.profilePicture}`} alt='Profile Image' />
            </div>

            <div className="input-group ms-3 me-3 mb-5">

                <div className="input-group-addon wd-input-style">
                    <label className="wd-input-title-style text-secondary">First Name</label>
                    <input className="wd-input-box-style" type="text" size={68}
                        title="Enter your first name here" value={profile.firstName}
                        onChange={(e) => setProfile({
                            ...profile,
                            firstName: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon wd-input-style">
                    <label className="wd-input-title-style text-secondary">Last Name</label>
                    <input className="wd-input-box-style" type="text" size={68}
                        title="Enter your last name here" value={profile.lastName}
                        onChange={(e) => setProfile({
                            ...profile,
                            lastName: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon wd-input-style">
                    <label className="wd-input-title-style text-secondary">Bio</label>
                    <textarea className="wd-input-box-style" type="text" cols={67} rows={5}
                        title="Enter your bio here" value={profile.bio}
                        onChange={(e) => setProfile({
                            ...profile,
                            bio: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon wd-input-style">
                    <label className="wd-input-title-style text-secondary">Location</label>
                    <input className="wd-input-box-style" type="text" size={68}
                        title="Enter your location here" value={profile.location}
                        onChange={(e) => setProfile({
                            ...profile,
                            location: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon wd-input-style">
                    <label className="wd-input-title-style text-secondary">Website</label>
                    <input className="wd-input-box-style" type="text" size={68}
                        title="Enter your Website here" value={profile.website}
                        onChange={(e) => setProfile({
                            ...profile,
                            website: e.target.value,
                        })} /><br /><br />
                </div>

                <div className="input-group-addon">
                    <label>Birth date</label> • <span className="text-primary">Edit</span> <br />
                    <input
                        type={DataView}
                        size={18}
                        placeholder="MM / DD / YYYY"
                        value={profile.dateOfBirth}
                        onChange={(e) => setProfile({
                            ...profile,
                            dateOfBirth: e.target.value,
                        })} /><br />
                </div>
            </div>

            <div className="fs-4">
                <i className="bi bi-chevron-right float-end"></i>
                <span className="ms-3">Switch to professional</span>
            </div><br /><br /><br />
        </>
    );
};

export default EditProfile;
