import './leftBar.css';

const LeftBar = () => {
    return(
        <div className="left-bar">
            <div className="header">
                <img src="../profile.avif" alt="" className='img-header'/>
                <h3 className='personName'>Jennifer Lopez</h3>
            </div>

            <div className="main-container">
                <h3>Friends</h3>
                <h3>Saved</h3>
                <h3>Memories</h3>
                <h3>Video</h3>
                <h3>Events</h3>
                <h3>Market Place</h3>
                <h3>Gaming Video</h3>
                <h3>Support</h3>
                <button className='btn-1'>See More</button>
            </div>

            <hr />

            <div className="footer">
                <h2 className='footer-head'>Your Shortcuts</h2>
                <div className="under-footer">
                    <img src="../figma.jpg" alt="" className='figma'/>
                    <h3 className='personName'>Figma Developments</h3>
                </div>
                <div className="under-footer">
                    <img src="../java.png" alt="" className='java'/>
                    <h3 className='personName'>JavaScript Essentials </h3>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;