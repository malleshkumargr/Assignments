class PaginationHelper {
    constructor(pageItemsArr,numOfItemsToDisplayPerPage) {
        this.pageItemsArr = pageItemsArr;
        this.numOfItemsToDisplayPerPage = numOfItemsToDisplayPerPage;
        this.item_count = this.pageItemsArr.length;
        this.page_count = Math.ceil(this.item_count / this.numOfItemsToDisplayPerPage);
        this.pageWiseItems = function(arr,eleDispCount) {
            const arrLen = arr.length;
            const noOfPages = Math.ceil(arrLen / eleDispCount);
            let pageArr = [];
            let perPageArr = [];
            let index = 0;
            let condition = 0;
            let remainingEleInArr = 0;
            
            for(let i = 0; i < noOfPages; i++) {
            
                if(i === 0) {
                    index = 0;
                    condition = eleDispCount;
                }
                for(let j = index; j < condition; j++) {
                    perPageArr.push(arr[j]);
                }
                pageArr.push(perPageArr);
                if(i === 0) {
                    remainingEleInArr = arrLen - perPageArr.length;
                } else {
                    remainingEleInArr = remainingEleInArr - perPageArr.length;
                }
    
                if(remainingEleInArr > 0) {
                    if(remainingEleInArr > eleDispCount) {
                        index = index + eleDispCount;
                        condition = condition + eleDispCount;
                    } else {
                        index = index + perPageArr.length;
                        condition = condition + remainingEleInArr;
                    }
                }
                perPageArr = [];
            }
            return pageArr;
    
        }
    }

    page_item_count(pageNo) {
        if(pageNo >= this.page_count || pageNo < 0) {
            return -1;
        } else {
            // console.log("Inside else loop in page_item_count method");
            // console.log(this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage));
            // console.log(this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage)[pageNo]);
           return this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage)[pageNo].length;
        }
    }

    page_index(indexNo) {
        let indexPage;
        if(indexNo >= this.item_count || indexNo < 0) {
            return -1;
        } else {
            // console.log("Inside else loop in page_item_count method");
            // console.log(this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage));
        //    console.log(this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage)[pageNo]);
        //    return this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage)[pageNo].length;


        const allPagesArr = this.pageWiseItems(this.pageItemsArr,this.numOfItemsToDisplayPerPage);
        
        let previousPageLastItemIndex = -1;
        let currentPageLastItemIndex = 0;
        for(let i = 0 ; i < allPagesArr.length; i++) {
	        currentPageLastItemIndex = previousPageLastItemIndex + allPagesArr[i].length;
	        if(indexNo <= currentPageLastItemIndex) {
		        indexPage = i;
		        break;
	        } 
            previousPageLastItemIndex = currentPageLastItemIndex;
        }

        return indexPage;
    }
}
}
const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.page_count);
console.log(helper.item_count);
console.log(helper.page_item_count(0));
console.log(helper.page_item_count(1));
console.log(helper.page_item_count(2));
console.log(helper.page_index(20));
console.log(helper.page_index(-10));
console.log(helper.page_index(0));
console.log(helper.page_index(2));
console.log(helper.page_index(5));
