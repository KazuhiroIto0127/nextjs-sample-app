import React, { Dispatch, createContext, useState } from 'react';

export const GlobalContext = createContext(
    {} as {
        isOpenMobileSidebar: boolean;
        setIsOpenMobileSidebar: Dispatch<React.SetStateAction<boolean>>;
        isOpenPcSidebar: boolean;
        setIsOpenPcSidebar: Dispatch<React.SetStateAction<boolean>>;
    }
);

export function GlobalProvider({children}) {
    const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState<boolean>(false)
    const [isOpenPcSidebar, setIsOpenPcSidebar] = useState<boolean>(true)

    return (
        <GlobalContext.Provider value={{isOpenMobileSidebar, setIsOpenMobileSidebar,
                                        isOpenPcSidebar, setIsOpenPcSidebar}}>
            {children}
        </GlobalContext.Provider>
    );
}
