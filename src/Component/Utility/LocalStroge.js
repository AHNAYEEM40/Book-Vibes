const getStoredBook =() =>{
    const StoreBookCollection =localStorage.getItem('Add-bookList');
    if(StoreBookCollection){
        return JSON.parse(StoreBookCollection);
    }
    return[];
}

const SaveBookList = id =>{

    const storeBookList =getStoredBook();
    const exists =storeBookList.find(bookId => bookId === id);
    if(!exists){
        storeBookList.push(id);
        localStorage.setItem('Add-bookList' ,JSON.stringify(storeBookList))
    }
}
export {getStoredBook ,SaveBookList}