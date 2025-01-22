import {useState} from react
import './styles.css'
import TableRow from './TableRow'

function App() {
    const initialColumn1Options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

    const [rows, setRows] = useState([]);

    const addRow = () => {
        setRows([...rows, { column1: '', column2: [] }]);
    };

    return (
        <div>
          <h1>Dynamic table with Dropdowns</h1>
          <table>
            <thead>
              <tr>
                <th>Label 1 (Single Select)</th>
                <th>Label 2 (Multi Select)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  index={index}
                  row={row}
                  setRows={setRows}
                  initialColumn1Options={initialColumn1Options}
                 /> 
              ))}
            </tbody>
          </table>
          <button onClick={addRow}>Add New Row</button>
        </div>
    );
}

export default App;
