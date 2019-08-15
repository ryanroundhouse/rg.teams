var index = {
    scheduleSelectionOnClicked : function (selectedSchedule){
        var selectionFormGroupItems = document.getElementsByClassName('selection-form-group');
        //console.log(selectionFormGroupItems);
        for (var i = 0; i < selectionFormGroupItems.length; i++){
            //console.log("comparing " + selectionFormGroupItems[i].className + " to " + selectedSchedule);
            if (selectionFormGroupItems[i].id === selectedSchedule){
                selectionFormGroupItems[i].style.display = "block";
            }
            else{
                selectionFormGroupItems[i].style.display = "none";
            }
        }
    }
}