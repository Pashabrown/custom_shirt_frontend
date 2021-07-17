import react from 'react'

export function Dropdown ({ value, onChange, name }) {
    return (
        <label>
          Pick your favorite T-shirt Color:
          <select value={value} onChange={onChange} name={name}>
            <option value="white">⬜</option>
            <option value="blue">🟦</option>
            <option value="black">⬛</option>
            <option value="grey">⚪</option>
            <option value="red">🟥</option>
          </select>
        </label>
    )
}