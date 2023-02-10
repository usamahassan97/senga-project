import React from 'react'
import invest from "../../Assets/Images/invest.png";
const Side = () => {
  return (
    <div>
        <div className="image_wrapper1 img-fluid">
              <img src={invest} alt="" className="side_images" />
            </div>

            <div className="side-text mt-3">
              <strong>Grow your wealth with us!</strong>
            </div>
    </div>
  )
}

export default Side