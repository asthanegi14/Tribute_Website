// var words = ["A Tribute to the Inspiring People of India....."],
//   part,
//   len = words.length-1,
//   set = 1,
//   i = 0,
//   skip_count = 0,
//   delay = 15,
//   speed = 80,
//   bol = true;
// var wordflick = function () {
//   setInterval(function () {
//     if (bol) {
//       if (set >= words[i].length) {
//         ++skip_count;
//         if (skip_count == delay) {
//           bol = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (set == 0) {
//         bol = true;
//         i++;
//         set = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }

//     part = words[i].substr(0, set);
//     if (skip_count == 0) {
//       if (bol) {
//         set++;
//       } else {
//         set--;
//       }
//     }
//     $(".hd").text(part);
//   }, speed);
// };

// $(document).ready(function () {
//   wordflick();
// });
