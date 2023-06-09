import { createRoot } from 'react-dom/client';
import CellularAutomata from './CellularAutomata';
import { webPackageBanner } from '@soundslikeodd/package-banner';
import standard from 'figlet/importable-fonts/Standard';
import packageJson from '../package.json';

const root = createRoot(document.getElementById('cellular-automata-app'));
root.render(<CellularAutomata />);

webPackageBanner({
    packageJson,
    capitalCase: true,
    breakOnWord: true,
    figletFontFileData: standard,
    additionalPackageInfo: [
        'description',
        'author',
        'license',
    ],
});
