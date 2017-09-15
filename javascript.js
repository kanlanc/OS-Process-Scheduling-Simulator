function disp() {
    var yourUl = document.getElementById("process");
    yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
};
function algorithm() {
    var yourUl1 = document.getElementById("description");
    yourUl1.style.display = yourUl1.style.display === 'none' ? '' : 'none';
    var x = document.getElementById('algo');
    var value = x.value;
    var number = document.getElementById('number').value;
    var ans = document.getElementById('ans');
    var process1_name = document.getElementById('first_process').value;
    var process1_value = document.getElementById('first_process_com').value;

    var process2_name = document.getElementById("second_process").value;
    var process2_value = document.getElementById("second_process_com").value;

    var process3_name = document.getElementById("third_process").value;
    var process3_value = document.getElementById("third_process_com").value;

    var process4_name = document.getElementById("fourth_process").value;
    var process4_value = document.getElementById("fourth_process_com").value;

    var process5_name = document.getElementById("fifth_process").value;
    var process5_value = document.getElementById("fifth_process_com").value;

    var process6_name = document.getElementById("sixth_process").value;
    var process6_value = document.getElementById("sixth_process_com").value;

    var process7_name = document.getElementById("seventh_process").value;
    var process7_value = document.getElementById("seventh_process_com").value;

    var process8_name = document.getElementById("eighth_process").value;
    var process8_value = document.getElementById("eighth_process_com").value;

    var process9_name = document.getElementById("ninth_process").value;
    var process9_value = document.getElementById("ninth_process_com").value;
    if (value == 0) {
            //do nothing                     
    }
    else if (value == 1) {
            //fcfs
            var average_time_num = process1_value*1 + process2_value*1 + process3_value*1 + process4_value*1 + process5_value*1 + process6_value*1 + process7_value*1 + process8_value*1 + process9_value*1;
            var average_time = average_time_num / number;

            console.log(average_time_num);
            ans.innerHTML = average_time;



    }

    else if (value == 2) {
            //shj

    }
    else if (value == 3) {
            //priority scheduling
    }
    else if (value == 4) {
            //round robin

    }

};