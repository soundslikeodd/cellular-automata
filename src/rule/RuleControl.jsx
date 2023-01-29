import Select from 'react-select';
import './RuleControl.scss';

const allRules = [...Array(256)].map((_, i) => ({value: i, label: i}));
const allHeights = [...Array(256)].fill(0).map((_, i) => ({value: i, label: i}));
const allWidths = [...Array(256)].fill(0).map((_, i) => ({value: i, label: i}));

const RuleControl = ({
    rule,
    setRule,
    height,
    setHeight,
    width,
    setWidth,
}) => (
    <section
        id="rule-control"
    >
        <div
            className="contorl-text"
        >
            Rule:
        </div> 
        <Select
            className="contorl-selector"
            classNamePrefix="react-select"
            options={allRules}
            defaultValue={{value: rule, label: rule}}
            onChange={e => setRule(e.value)}
        />
        <div
            className="contorl-text"
        >
            Height:
        </div> 
        <Select
            className="contorl-selector"
            classNamePrefix="react-select"
            options={allHeights}
            defaultValue={{value: height, label: height}}
            onChange={e => setHeight(e.value)}
        />
        <div
            className="contorl-text"
        >
            Width:
        </div> 
        <Select
            className="contorl-selector"
            classNamePrefix="react-select"
            options={allWidths}
            defaultValue={{value: width, label: width}}
            onChange={e => setWidth(e.value)}
        />
    </section>
);

export default RuleControl;
