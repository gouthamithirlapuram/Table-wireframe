import React, {useState} from 'react'
import './styles.css'

function TableRow({index, row, setRows, initialColumn1Options}) {
  const [column2Options, setColumn2Options] = useState([
    'Option A',
    'Option B',
    'Option C',
  ])
  const [newColumn2Option, setNewColumn2Option] = useState('')

  const handleColumn1Change = e => {
    const updateRow = {...row, column1: e.target.vale}
    const updateRows = [...setRows]
    updateRows[index] = updateRow
    setRows(updateRows)
  }

  const handleColumn2Change = e => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      option => option.value,
    )
    const updateRow = {...row, column2: selectedOptions}
    const updateRows = [...setRows]
    updateRows[index] = updateRow
    setRows(updateRows)
  }

  const addNewColumn2Option = () => {
    if (newColumn2Option && !column2Options.includes(addNewColumn2Option)) {
      setColumn2Options([...column2Options, newColumn2Option])
      setNewColumn2Option('')
    }
  }

  return (
    <tr>
      <td>
        <select
          value={row.column1}
          onChange={handleColumn1Change}
          disable={initialColumn1Options.filter((option) => !rows.some((r) => r.column1 === option)).length === 0}
        >
          <option value="">Select</option>
          {initialColumn1Options.filter((option) => !rows.some((r) => r.column1 === option))
          .map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))
          }
        </select>
      </td>
      <tb>
        <select
          multiple
          value={row.column2}
          onChange={handleColumn2Change}
        >
        {column2Options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
        <option value="" disable>Add a new option...</option>
        </select>
        <div>
          <input
            type='text'
            placeholder="New option"
            value={newColumn2Option}
            onChange={(e) => setNewColumn2Option(e.target.value)}
          />
          <button onClick={addNewColumn2Option}>
            Add option
          </button>
        </div>
      </tb>
    </tr>
  )
}

export default TableRow
