import React from 'react';

function App() {
    const [greeting, setGreeting] = React.useState('... not loaded ...');

    React.useEffect(() => {
        (async function () {
            const fetchResult = await fetch('api/greeting');
            const fetchGreeting = await fetchResult.text();
            setGreeting(fetchGreeting);
        })();
    }, []);

    return (
        <div className='App'>
            <h3>Greeting</h3>
            <p>{greeting}</p>
        </div>
    );
}

export default App;
