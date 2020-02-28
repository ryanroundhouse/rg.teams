var createSchedule = {
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
    },
    dayOfWeekOnClick : function (event){
        var clickedCell = (event.target || event.srcElement);
        var daysOfWeek = document.getElementsByClassName('dayOfWeekPanel');
        for (var i = 0; i < daysOfWeek.length; i++){
            daysOfWeek[i].classList.remove('highlighted');
        }
        clickedCell.classList.add('highlighted');
        event.stopPropagation();
    },
    onSchedulePageLoad : function(){
        new Picker(document.querySelector('.js-inline-picker'), {
            controls: true,
            format: 'HH:mm',
            headers: true,
            inline: true
          });
    },
    deleteGame: function(id){
        alert('got id ' + id);
    },
}