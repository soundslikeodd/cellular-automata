import {
    convertToPaddedBinaryString,
    caluculateRule
} from '../common/common';
import Square from '../common/Square';
import './Generations.scss';

const processesRule = (rule, previousGeneration) => {
    const ruleMap = caluculateRule(convertToPaddedBinaryString(rule));
    const length = previousGeneration.length;
    const nextGeneration = [...Array(length)]
        .map((_, i) => {
            const rule = previousGeneration[i === 0 ? length - 1 : i - 1] + 
                previousGeneration[i] +
                previousGeneration[i === length - 1 ? 0 : i + 1];
            return ruleMap[rule];
        });
    return nextGeneration;
};

const Generations = ({rule, height, width}) => {
    const halfInitialGeneration = Array(Math.floor((width / 2))).fill(0);
    const initalGeneration = [...halfInitialGeneration, 1, ...halfInitialGeneration].join('');
    return (
        <section
            id="generations-container"
        >
            {
                [...Array(height)]
                    .reduce((acc, _, i) => [...acc, processesRule(rule, acc[i])], [initalGeneration])
                    .map((generation, i) => (
                        <div
                            className="generation"
                            key={i}
                        >
                            {[...generation].map((g, j) => (
                                <Square
                                    key={j}
                                    shaded={+g}
                                    border={false}
                                />
                            ))}
                        </div>
                    ))
            }
        </section>
    );
};

export default Generations;
