import React, { useState } from 'react';

function WordsVista() {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [formedWord, setFormedWord] = useState('');
    const [letters, setLetters] = useState(['H', 'E', 'R', 'E', 'T']);

    const handleLetterClick = (index) => {
        const letter = letters[index];
        setSelectedLetters([...selectedLetters, letter]);
        setFormedWord([...selectedLetters, letter].join(''));
        const newLetters = [...letters];
        newLetters.splice(index, 1);
        setLetters(newLetters);
    };

    const handleClear = () => {
        setSelectedLetters([]);
        setFormedWord('');
        setLetters(['H', 'E', 'R', 'E', 'T']);
    };

    // Define a list of valid words
    const validWords = ['HERE', 'THERE', 'THEREFORE', 'HERETIC', 'ETC'];

    // Check if the current selection forms a word
    const isWord = (word) => {
        return validWords.includes(word);
    };

    // Listen for changes in selectedLetters
    React.useEffect(() => {
        if (isWord(formedWord)) {
            setSelectedLetters([]);
            setFormedWord('');
            setLetters(['H', 'E', 'R', 'E', 'T']);
        }
    }, [formedWord]);

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-gray-900 text-white">
            <h1 className="text-3xl mb-4">Word Vista</h1>
            <div className="flex items-center mb-4">
                <span className="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                    {formedWord}
                </span>
            </div>
            <div className="flex mb-4">
                {letters.map((letter, index) => (
                    <button
                        key={index}
                        className="bg-gray-800 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-gray-700"
                        onClick={() => handleLetterClick(index)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleClear}
            >
                Clear
            </button>
        </div>
    );
}

export default WordsVista;
