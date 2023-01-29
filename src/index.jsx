import { createRoot } from 'react-dom/client';
import CellularAutomata from './CellularAutomata';

const root = createRoot(document.getElementById('cellular-automata-app'));
root.render(<CellularAutomata />);
