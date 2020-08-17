import React from 'react'

function Header() {
    return (
        <div className = "container">
            <div className = "header" style={header}>
                <i className="fa fa-check-square fa-fw"/>
                Todo List
             </div>
        </div>
    )
}

const header ={
    display :'flex',
    flexDirection : 'row',
    height : '12vh',
    fontSize : '2rem',
    alignItems : 'center',
    justifyContent: 'center'


}


export default Header
