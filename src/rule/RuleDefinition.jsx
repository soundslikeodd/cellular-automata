import Square from "../common/Square";
import {
    convertToPaddedBinaryString,
    caluculateRule,
    KEYS,
} from '../common/common';
import './RuleDefinition.scss';

const RuleDefinition = ({
    rule,
}) => {
    const binaryRule = convertToPaddedBinaryString(rule);
    const ruleMap = caluculateRule(binaryRule);
    return (
        <section
            id="rule-definition"
        >
            <div className="keys">
                {KEYS.map((k, i) => (
                    <div
                        className="key"
                        key={k}
                    >
                        <div
                            className="digit"
                        >
                            {binaryRule[i]}
                        </div>
                        <Square shaded={+k[0]} />
                        <Square shaded={+k[1]} />
                        <Square shaded={+k[2]} />
                        <Square shaded={+ruleMap[k]} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RuleDefinition;
