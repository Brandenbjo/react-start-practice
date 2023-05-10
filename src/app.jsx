import React, { useEffect, useState } from 'react'
import UserProfile from './components/UserProfile'




const App = () => {

    const [count, setCount] = useState(0)



    useEffect(() => {
        console.log('running')
        document.title = `you have clicked ${count} times`
    })
    const focus = e => {
        { console.log(count) }
    }

    return (
        <div>
            <UserProfile first='brian' last='smith' age='17' email='fake@fake.com' />
            <h1 className='text-center text-warning'>sdbksvksnfksbkf</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
            <input type="text" onKeyDown={focus} />
        </div>
    );

};

export default App



