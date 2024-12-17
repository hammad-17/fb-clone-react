import "./rightBar.css";

const RightBar = () => {
  return (
    <div className="right-bar">
      <div className="header1">
        <h3 className="heading-1">Suggested</h3>
        <div className="under-header">
          <h3 className="heading-2">Groups</h3>

          <h4 className="heading-3">New way to find and join communities</h4>

          <button className="btn-2">Find Your Groups</button>
        </div>
        <p className="para1">josh and 4 ither friends have joined the group</p>
      </div>

      <div className="main-cont">
        <h3 className="heading-1">Contacts</h3>

        <div className="under-cont1">
          <img src="../pfp1.jpg" alt=""  className="img-under"/>
          <h3 className="heading-12">Alexander Smith</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp2.jpg" alt="" className="img-under" />
          <h3 className="heading-12">Jake Paul</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp3.jpg" alt=""  className="img-under"/>
          <h3 className="heading-12">Sarah D</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp4.jpg" alt=""  className="img-under"/>
          <h3 className="heading-12">Carlos Blue</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp5.jpg" alt="" className="img-under"/>
          <h3 className="heading-12">Davis Frank</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp6.jpg" alt="" className="img-under"/>
          <h3 className="heading-12">Jake Fraser</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp7.jpg" alt="" className="img-under"/>
          <h3 className="heading-12">Janny Delilah</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp8.jpg" alt="" className="img-under"/>
          <h3 className="heading-12">Kendra Frig</h3>
        </div>

        <div className="under-cont1">
          <img src="../pfp9.jpg" alt="" className="img-under"/>
          <h3 className="heading-12">Khawar Hussain</h3>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
