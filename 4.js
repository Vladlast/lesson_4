// задание 1

var purce = {
    pocket: ["cosmetic", "keys", "pen", "money", "phone"],
    getstaf: function () {
    console.log(purce.pocket)},
    addstaf: function (staf) {
            purce.pocket.push(staf)},
    removestaf: function (staf) {
           for(var i=0; i<= purce.pocket.length;i++){
            purce.pocket[i]===staf? purce.pocket.splice(i, 1): undefined;
           }
    }
    }
    console.log("Задание 1")
    console.log(" ")
    console.log("Проверяем что у нас есть в сумочке")
    purce.getstaf()
    console.log("Добавляем расчёску и проверяем снова")
    purce.addstaf("hairbrush")
    purce.getstaf()
    console.log("Вытаскиваем расчёску и проверяем снова")
    purce.removestaf("pen")
    purce.getstaf()
    console.log(" ")

    //Задание 2

var LibraryBook = function(bookTitle="Ворошиловград", year=2010, author="Сергей Жадан",  ){
    var author = author
    var year = year
    var bookTitle = bookTitle
          var readerName = " "
          var readerData = " "
          
          giveTheBook = function (client = "Влад") {
            readerName = client;
          readerData = new Date
          }
          this.getBookInfo = function(){
          console.log(`"Книгу взял ${readerName}, Когда: ${readerData.toLocaleString()}`)
          }
          
          this.getTheBook = function(client){
          if (readerName === " ") {
          giveTheBook(client)
          return bookTitle
          }
          else {
           alert("Книга выдана")
          }
          
          }
          this.returnBook = function(){
          readerName = " ",
          readerData = undefined
          }
          }
          
        console.log("Задание 2")
          var vim = new LibraryBook
          vim.getTheBook("Влад")
          vim.getBookInfo()

          // Задание 3

        var Constructor = function () {
            Constructor.prototype.addProperty = function (nameprop, prop) {
              this[nameprop] = prop
            }
          }
  
          var newobj = new Constructor
  
        newobj.addProperty("rods", "yes")
        console.log(" ")
        console.log("Задание 3")
        console.log(newobj)