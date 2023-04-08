import React from "react";

const HomeComponentItem = (
    {
        post = {
            "_id": 2001,
            "username": "Novak Djokovic",
            "handle": "novak_djokovic",
            "signature": "@DjokerNole",
            "time": "50mins",
            //  "avater": "Novak_400x400.jpeg",
            "avater": "https://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg",
            "image": "../../images/2023_AO_men_final.avif",
            "title": "I'm very grateful for the kind of energy and reception and love and support I got last night.",
            "content1": "\"I'm super blessed and grateful...\" ",
            "content2": "Led by our founders @DjokerNole and we have done great things in the past 15 years. ",
            "comments": "8976",
            "retweet": "1.2M",
            "likes": "68.7K",
            "dislikes": "789",
            "isLiked": true,
            "isSubscribed": true
        }
    }
) => {
    return (

        <div className="container mt-2 me-2 p-0">
            <div className="row">
                <div className="col-1 mt-1">
                    <img className="wd-avater-style" src={post.avater} alt="Avater image" />
                </div>

                <div className="col-auto">

                    <div className="row">
                        <div className="col-11">
                            <span className=" wd-author-font"> {post.username} </span>
                            <i className={`bi bi-patch-check-fill ${post.isSubscribed ? 'wd-color-gold' : 'wd-color-blue'}`}></i>
                            <span className=" wd-handle-font-2 wd-fg-color-smoke"> @{post.handle} • {post.time}</span>
                        </div>
                        <div className="col-1">
                            <i className=" bi bi-three-dots wd-fg-color-smoke float-right"></i>
                        </div>
                    </div>

                    <div className="wd-main-content-style">
                        <p>
                            {post.content1}
                            <span className='wd-color-blue'>{post.signature}</span>
                        </p>
                    </div>

                    <div className="wd-img-content-style wd-post-border wd-rounded-corners">
                        <img className="wd-img-style wd-img-rounded-corners" src={post.image} alt='' />
                        <span>
                            <p className="pt-2 ps-3 pe-3"><b>{post.title}</b></p>
                            <p className="pt-0 ps-3 pe-3 pb-2">{post.content2}</p>
                        </span>
                    </div>

                    <div className="row pt-2 wd-fg-color-smoke">
                        <div className="col">
                            <i className="bi bi-chat"></i>
                            <span>&nbsp; &nbsp; {post.comments}</span>
                        </div>

                        <div className="col">
                            <i className="bi bi-arrow-repeat"></i>
                            <span>&nbsp; &nbsp; {post.retweet}</span>
                        </div>

                        <div className={`col ${post.isLiked ? "wd-liked-style" : ""}`}>
                            <i className={`bi ${post.isLiked ? "bi-heart-fill" : "bi-heart"}`}></i>
                            <span>&nbsp; &nbsp; {post.likes}</span>
                        </div>

                        <div className="col">
                            <i className="bi bi-upload"></i>
                        </div>
                    </div><br />
                    <span className="wd-color-blue"> Show this thread </span>
                    <br /><br />
                </div>

            </div>
        </div>

    );
};

export default HomeComponentItem;