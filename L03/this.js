const book {
    isAvailable: false,
    checkIn: function(){
        this.isAvailable = true;
        return this
    }
};
console.log(book.CheckIn());