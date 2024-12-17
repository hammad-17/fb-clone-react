import "./mainBar.css";

const MainBar = () => {
  return (
    <div className="main-bar">
      <div className="more-header">
        <button className="button">For You</button>
        <button className="button">Live</button>
        <button className="button">Reels</button>
        <button className="button">Videos</button>
      </div>
      <div className="header-content">
        <img
          src="../profile.avif"
          alt=""
          className="img-header another-class"
        />
        <input
          type="text"
          placeholder="What's on your mind,Jennifer"
          className="input-1"
        />
      </div>
      <div className="post-content">
        <div className="post-container1">
          <div className="post-under">
            <div className="img-cont">
              <img
                src="../pfp8.jpg"
                alt=""
                className="img-header another-class"
              />
            </div>
            <div className="para-cont">
              <h3 className="heading-34">Kendra Frig</h3>
              <p className="paragraph">10 mins ago</p>
            </div>
          </div>

          <div className="post-inder-image">
            <img src="../menu.png" alt="" className="menu" />
            <img src="../cross.png" alt="" className="cross" />
          </div>
        </div>
        <div className="post-container2">
          <h3 className="post-heading">Winter is coming....</h3>
          <img src="../winter.jpg" alt="" className="post-img" />
        </div>

        <div className="footer-post">
          <div className="footer1">
            <img src="../like.jpg" alt="" className="like" />
            <p>934</p>
          </div>
          <hr />
          <div className="footer2 footer1">
            <img src="../comment.png" alt="" className="like" />
            <p>34</p>
          </div>
          <hr />
          <div className="footer1">
            <img src="../share.png" alt="" className="like share" />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default MainBar;
