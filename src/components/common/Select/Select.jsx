import React, { useEffect } from 'react';
import './select.css';

export default function Select({name,required,dropdown,value,register,}) {
    // useEffect(() => {
    //     console.log(props.dropdown, "wwwwwww")
    //     for (i = 0; i <= props.dropdown.length; i++){
            
    //     }
    // },[props.dropdown])
    return (
        <div className="form_input">
            <select className="choose_gender"
                ref={register}
                name={name}
                required={required}
                value={value}

            >
           
            {dropdown.map((data) => {
                return (
                    <option value={data.id}>
                        {data.value}</option>
                )
            })
                
            }
           
            </select>
            </div>
    )
}