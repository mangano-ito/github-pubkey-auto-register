import commandLineArgs, { OptionDefinition } from 'command-line-args';
import Options from '../model/Options';

const optionDefinitions: OptionDefinition[] = [
    {
        name: 'title',
        alias: 't',
        type: String,
    },
    {
        name: 'pubKeyPath',
        alias: 'k',
        type: String,
    },
    {
        name: 'token',
        alias: 'o',
        type: String
    }
];

export default (): Options => {
    const options = commandLineArgs(optionDefinitions);
    const required = ['title', 'pubKeyPath'];
    
    for (const key of required) {
        if (!(key in options) || key === '') {
            throw new Error(`required option "${key}" is missing.`)
        }
    }

    return {
        title: options.title,
        pubKeyPath: options.pubKeyPath,
    } 
};