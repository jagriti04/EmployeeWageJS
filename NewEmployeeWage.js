// UC1 IF ELSE Condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) %2;
    
    if (empCheck == IS_ABSENT) {
        console.log("UC- absent");
        return;
    } else {
        console.log("UC1 - emp present");
    }
}
