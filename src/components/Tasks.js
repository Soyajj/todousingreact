import React from 'react';

function Tasks({length}){
    return(
        <div style = {{display: 'flex', justifyContent : 'center'}}>
            <button type="button" className="btn btn-info btn-sm">
                Tasks <span className="badge badge-light">{length}</span>
            </button>
        </div>
    )
}
export default Tasks