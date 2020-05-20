import React from "react";
import error from './Notification.module.css';



const Notification = ({name}) => ( 
<div className={error.error}>
	<h3 className={error.message}>{`${name} Contact already exists!`}
</h3>
</div>
)

export default Notification;