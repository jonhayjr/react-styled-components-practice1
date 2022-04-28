import {useState} from 'react';

const useToggler = () => {
    const [isShowing, setIsShowing] = useState(true);

    return [isShowing, setIsShowing]
}

export default useToggler;