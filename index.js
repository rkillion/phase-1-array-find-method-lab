function superbowlWin(array) {
    let winRecord = array.find(element => element.result==="W");
    return winRecord ? winRecord.year : undefined;
}
