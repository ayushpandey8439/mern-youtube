export function convert_time(duration) {
  let a = duration.match(/\d+/g);
  let correctedList = a.map((element, index) => {
    if (element < 10 && index != 0) return "0" + element;
    else return element;
  });
  return correctedList.join(":");
}

export function convert_upload_time(uploadedOn) {
  const uploadedOnDate = new Date(uploadedOn).getTime();
  const now = Date.now();
  const diffTime = Math.abs(now - uploadedOnDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let returnTime = "";
  if (diffDays < 1) {
    let hours = diffTime / (1000 * 60 * 60);
    if (hours < 1) {
      let minutes = diffTime / (1000 * 60);
      returnTime = minutes + " minutes ago";
    } else {
      returnTime = hours + " hours ago";
    }
  } else if (diffDays >= 1 && diffDays <= 30) {
    returnTime = diffDays == 1 ? diffDays + " day ago" : diffDays + " days ago";
  } else if (diffDays > 30 && diffDays < 365) {
    returnTime = diffDays / 30 + " months ago";
  } else {
    returnTime = diffDays / 365 + "years ago";
  }

  return returnTime;
}
