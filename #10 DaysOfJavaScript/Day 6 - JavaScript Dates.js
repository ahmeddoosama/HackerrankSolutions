function getDayName(dateString) {

    let day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let date = new Date(dateString);

    return day_names[date.getDay()];
}