import react from 'react'

export function Dropdown3 ({ value, onChange, name }) {
    return (
        <label>
          Pick your favorite text color:
          <select value={value} onChange={onChange} name={name}>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="🟦">blue</option>
            <option value="green">green</option>
            <option value="red">red</option>
          </select>
        </label>
    )
}