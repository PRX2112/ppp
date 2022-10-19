import React from 'react'
import Department from './Department';

function List(props) {
    const deptse=props.depts;

    return (
        <>
            {deptse.map(dept => <li>{dept}</li> )}
        </>
    )
}

export default List
