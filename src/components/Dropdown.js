import react from 'react'

export function Dropdown ({ value, onChange, name }) {
    return (
        <label>
          Pick your favorite color:
          <select value={value} onChange={onChange} name={name}>
            <option value="white">white</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
            <option value="grey">grey</option>
            <option value="red">red</option>
          </select>
        </label>
    )
}