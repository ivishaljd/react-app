import React from 'react'

 export default function Alert(props) {
  return (
   
       props.Alert && <div className={`alert alert-warning alert-dismissible fade show`}  role="alert">
  <strong>{props.Alert.type}</strong> :{props.Alert.message}
 
</div>
    
  )
}
