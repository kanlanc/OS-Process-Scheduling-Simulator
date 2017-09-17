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
    var process1_value = document.getElementById('first_process_com').value*1;

    var process2_name = document.getElementById("second_process").value;
    var process2_value = document.getElementById("second_process_com").value*1;

    var process3_name = document.getElementById("third_process").value;
    var process3_value = document.getElementById("third_process_com").value*1;

    var process4_name = document.getElementById("fourth_process").value;
    var process4_value = document.getElementById("fourth_process_com").value*1;

    var process5_name = document.getElementById("fifth_process").value;
    var process5_value = document.getElementById("fifth_process_com").value*1;

    var process6_name = document.getElementById("sixth_process").value;
    var process6_value = document.getElementById("sixth_process_com").value*1;

    var process7_name = document.getElementById("seventh_process").value;
    var process7_value = document.getElementById("seventh_process_com").value*1;

    var process8_name = document.getElementById("eighth_process").value;
    var process8_value = document.getElementById("eighth_process_com").value*1;

    var process9_name = document.getElementById("ninth_process").value;
    var process9_value = document.getElementById("ninth_process_com").value*1;
    var process_order="start";
    var array=[process1_value,process2_value,process3_value,process4_value,process5_value,process6_value,process7_value,process8_value,process9_value];
    var dict={};
    dict[process1_value]=process1_name;
    dict[process2_value]=process2_name;
    dict[process3_value]=process3_name;
    dict[process4_value]=process4_name;
    dict[process5_value]=process5_name;
    dict[process6_value]=process6_name;
    dict[process7_value]=process7_name;
    dict[process8_value]=process8_name;
    dict[process9_value]=process9_name;
    var dict1={};
    if (value == 0) {
            //do nothing                     
    }
    else if (value == 1) {
            //fcfs

            var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value+ process9_value;
            var average_time = average_time_num / number;
            for(var i=0;i<array.length;i++)
            {
                var xam = dict[array[i].toString()];
                process_order=process_order+","+xam;
            }
            ans.innerHTML = average_time;
            ans1.innerHTML = process_order;
    }

    else if (value == 2) {
            //shj
            var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value+ process9_value;
            var average_time = average_time_num / number;
            array.sort();
            for(var i=0;i<array.length;i++)
            {
                var xam = dict[array[i].toString()];
                process_order=process_order+","+xam;
            }
            ans.innerHTML = average_time;
            ans1.innerHTML = process_order;


    }
    else if (value == 3) {
            //priority scheduling
            var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value+ process9_value;
            var average_time = average_time_num / number;

            var yourUl2 = document.getElementById("priority_form");
            yourUl2.style.display = yourUl2.style.display === 'none' ? '' : 'none';
            
            var process1_priority = document.getElementById('priority_1').value*1;
            var process2_priority = document.getElementById('priority_2').value*1;
            var process3_priority = document.getElementById('priority_3').value*1;
            var process4_priority = document.getElementById('priority_4').value*1;
            var process5_priority = document.getElementById('priority_5').value*1;
            var process6_priority = document.getElementById('priority_6').value*1;
            var process7_priority = document.getElementById('priority_7').value*1;
            var process8_priority = document.getElementById('priority_8').value*1;
            var process9_priority = document.getElementById('priority_9').value*1;

            dict1[process1_priority]=process1_value;
            dict1[process2_priority]=process2_value;
            dict1[process3_priority]=process3_value;
            dict1[process4_priority]=process4_value;
            dict1[process5_priority]=process5_value;
            dict1[process6_priority]=process6_value;
            dict1[process7_priority]=process7_value;
            dict1[process8_priority]=process8_value;
            dict1[process9_priority]=process9_value;

            var array1=[process1_priority,process2_priority,process3_priority,process4_priority,process5_priority,process6_priority,process7_priority,process8_priority,process9_priority];
            array1.sort();
            for(var i=0;i<array1.length;i++)
            {
                var xam = dict1[array1[i].toString()];
                process_order=process_order+","+xam;
            }

            ans.innerHTML = average_time;
            ans1.innerHTML = process_order;
            
            
    }
    else if (value == 4) {
            //round robin

    }

};