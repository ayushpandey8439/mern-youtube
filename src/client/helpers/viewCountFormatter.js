export function count_views(viewCount) {
  let count = "";
  if (viewCount < 1000) {
    count = viewCount;
    count = +count.toFixed(2);
  } else if (viewCount < 1000000) {
    count = viewCount / 1000;
    count = +count.toFixed(2);
    count += "K";
  } else {
    count = viewCount / 1000000;
    count = +count.toFixed(2);
    count += "M";
  }
  return count;
}
