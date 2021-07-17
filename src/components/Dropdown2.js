import react from 'react'

export function Dropdown2 ({ value, onChange, name }) {
    return (
        <label>
          Pick your favorite text color:
          <select value={value} onChange={onChange} name={name}>
            <option value="white">⬜</option>
            <option value="black">⬛</option>
            <option value="blue">🟦</option>
            <option value="green">🟩</option>
            <option value="red">🟥</option>
          </select>
        </label>
    )
}