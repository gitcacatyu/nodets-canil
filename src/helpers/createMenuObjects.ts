type MenuOpotions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObjects = (activeMenu: MenuOpotions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

     if(activeMenu !== ''){
        returnObject[activeMenu] = true;
     }

    return returnObject;
} 