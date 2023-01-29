import {
    useState
} from 'react';
import RuleControl from './rule/RuleControl';
import RuleDefinition from './rule/RuleDefinition';
import Generations from './generation/Generations';
import './CellularAutomata.scss';

const CellularAutomata = ({}) => {
    const [rule, setRule] = useState(30);
    const [height, setHeight] = useState(15);
    const [width, setWidth] = useState(31);
    return (
        <main
            id="cellular-automata-container"
        >
            <header>
                one-dimensional cellular automata
            </header>
            <div
                id="controls"
            >
                <RuleDefinition
                    rule={rule}
                />
                <RuleControl
                    rule={rule}
                    setRule={setRule}
                    height={height}
                    setHeight={setHeight}
                    width={width}
                    setWidth={setWidth}
                />
            </div>
            <div
                id="generations"
            >
                <Generations
                    rule={rule}
                    height={height}
                    width={width}
                />
            </div>
            <footer>
                footer
            </footer>
        </main>
    );
};

export default CellularAutomata;
