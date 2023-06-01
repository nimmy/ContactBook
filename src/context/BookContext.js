import {createContext, useState} from 'react';

const BookContext = createContext();

export function Provider({children}) {
    const [count, setCount] = useState(5);
    const dataToShare = {
        count,
        fn: () => {
            setCount(count + 1);
            console.log('first')
        }
    }

    return <BookContext.Provider value={dataToShare}>
        {children}
    </BookContext.Provider>
}
// export {Provider};
export default BookContext;