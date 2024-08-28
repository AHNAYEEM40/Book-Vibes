const getWishBook =() =>{
    const StoreWishListCollection =localStorage.getItem('Add-WishList');
    if(StoreWishListCollection){
        return JSON.parse(StoreWishListCollection);
    }
    return[];
}

const SaveWishList = id =>{

    const storeWishBookList =getWishBook();
    const exists =storeWishBookList.find(bookId => bookId === id);
    if(!exists){
        storeWishBookList.push(id);
        localStorage.setItem('Add-WishList' ,JSON.stringify(storeWishBookList))
    }
}
export {getWishBook ,SaveWishList}