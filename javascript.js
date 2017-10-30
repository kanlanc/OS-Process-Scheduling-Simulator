function disp() {
    var yourUl = document.getElementById("process");
    yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
}
function algorithm() {
    var yourUl1 = document.getElementById("description");
    yourUl1.style.display = yourUl1.style.display === 'none' ? '' : 'none';
    var x = document.getElementById('algo');
    var value = x.value;
    var number = document.getElementById('number').value;
    var ans = document.getElementById('ans');
    var process1_name = document.getElementById('first_process').value;
    var process1_value = document.getElementById('first_process_com').value * 1;

    var process2_name = document.getElementById("second_process").value;
    var process2_value = document.getElementById("second_process_com").value * 1;

    var process3_name = document.getElementById("third_process").value;
    var process3_value = document.getElementById("third_process_com").value * 1;

    var process4_name = document.getElementById("fourth_process").value;
    var process4_value = document.getElementById("fourth_process_com").value * 1;

    var process5_name = document.getElementById("fifth_process").value;
    var process5_value = document.getElementById("fifth_process_com").value * 1;

    var process6_name = document.getElementById("sixth_process").value;
    var process6_value = document.getElementById("sixth_process_com").value * 1;

    var process7_name = document.getElementById("seventh_process").value;
    var process7_value = document.getElementById("seventh_process_com").value * 1;

    var process8_name = document.getElementById("eighth_process").value;
    var process8_value = document.getElementById("eighth_process_com").value * 1;

    var process9_name = document.getElementById("ninth_process").value;
    var process9_value = document.getElementById("ninth_process_com").value * 1;
    var process_order = "start";
    var waiting_time = "start";
    var turn_around_time = "start";

    // var array = [process1_value, process2_value, process3_value, process4_value, process5_value, process6_value, process7_value, process8_value, process9_value];
    var array = [];

    if (process1_value != 0)
        array.push(process1_value);
    if (process2_value != 0)
        array.push(process2_value);
    if (process3_value != 0)
        array.push(process3_value);
    if (process4_value != 0)
        array.push(process4_value);
    if (process5_value != 0)
        array.push(process5_value);
    if (process6_value != 0)
        array.push(process6_value);
    if (process7_value != 0)
        array.push(process7_value);
    if (process8_value != 0)
        array.push(process8_value);
    if (process9_value != 0)
        array.push(process9_value);

    var dict = {};
    dict[process1_value] = process1_name;
    dict[process2_value] = process2_name;
    dict[process3_value] = process3_name;
    dict[process4_value] = process4_name;
    dict[process5_value] = process5_name;
    dict[process6_value] = process6_name;
    dict[process7_value] = process7_name;
    dict[process8_value] = process8_name;
    dict[process9_value] = process9_name;
    var dict1 = {};
    if (value == 0) {
        //do nothing                     
    }
    else if (value == 1) {
        //fcfs

        var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value + process9_value;
        var average_time = average_time_num / number;
        var wt = [], avwt = 0, avtat = 0;
        var tat = []
        wt[0] = 0;
        for (var i = 1; i < number; i++) {
            wt[i] = 0;
            for (j = 0; j < i; j++)
                wt[i] += array[j];
        }
        for (i = 0; i < number; i++) {
            tat[i] = array[i] + wt[i];
            avwt += wt[i];
            avtat += tat[i];

        }
        for (var i = 0; i < array.length; i++) {
            var xam = dict[array[i].toString()];
            var ram = wt[i];
            var lam = tat[i];
            process_order = process_order + "," + xam;
            waiting_time = waiting_time + "," + ram;
            turn_around_time = turn_around_time + "," + lam;
        }
        ans.innerHTML = average_time;
        ans1.innerHTML = process_order;
        ans2.innerHTML = waiting_time;
        ans3.innerHTML = turn_around_time;
    }

    else if (value == 2) {
        //shj
        var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value + process9_value;
        var average_time = average_time_num / number;
        array.sort();
        var wt = [], avwt = 0, avtat = 0;
        var tat = []
        wt[0] = 0;
        for (var i = 1; i < number; i++) {
            wt[i] = 0;
            for (j = 0; j < i; j++)
                wt[i] += array[j];
        }
        for (i = 0; i < number; i++) {
            tat[i] = array[i] + wt[i];
            avwt += wt[i];
            avtat += tat[i];

        }
        for (var i = 0; i < array.length; i++) {
            var xam = dict[array[i].toString()];
            var ram = wt[i];
            var lam = tat[i];
            process_order = process_order + "," + xam;
            waiting_time = waiting_time + "," + ram;
            turn_around_time = turn_around_time + "," + lam;
        }
        ans.innerHTML = average_time;
        ans1.innerHTML = process_order;
        ans2.innerHTML = waiting_time;
        ans3.innerHTML = turn_around_time;

    }
    else if (value == 3) {
        //priority scheduling
        var average_time_num = process1_value + process2_value + process3_value + process4_value + process5_value + process6_value + process7_value + process8_value + process9_value;
        var average_time = average_time_num / number;

        var yourUl2 = document.getElementById("priority_form");
        yourUl2.style.display = yourUl2.style.display === 'none' ? '' : 'none';

        var process1_priority = document.getElementById('priority_1').value * 1;
        var process2_priority = document.getElementById('priority_2').value * 1;
        var process3_priority = document.getElementById('priority_3').value * 1;
        var process4_priority = document.getElementById('priority_4').value * 1;
        var process5_priority = document.getElementById('priority_5').value * 1;
        var process6_priority = document.getElementById('priority_6').value * 1;
        var process7_priority = document.getElementById('priority_7').value * 1;
        var process8_priority = document.getElementById('priority_8').value * 1;
        var process9_priority = document.getElementById('priority_9').value * 1;


        // var array1 = [process1_priority, process2_priority, process3_priority, process4_priority, process5_priority, process6_priority, process7_priority, process8_priority, process9_priority];
        var array1 = [];
        // if (process1_priority != 0) {
        //     array1.push(process1_priority);
        //     dict1[process1_priority] = process1_name;
        // }
        // if (process2_priority != 0) {
        //     dict1[process2_priority] = process2_name;
        //     array1.push(process2_priority);
        // }
        // if (process3_priority != 0) {
        //     dict1[process3_priority] = process3_name;
        //     array1.push(process3_priority);
        // }
        // if (process4_priority != 0) {
        //     dict1[process4_priority] = process4_name;
        //     array1.push(process4_priority);
        // }
        // if (process5_priority != 0) {
        //     dict1[process5_priority] = process5_name;
        //     array1.push(process5_priority);
        // }
        // if (process6_priority != 0) {
        //     dict1[process6_priority] = process6_name;
        //     array1.push(process6_priority);
        // }
        // if (process7_priority != 0) {
        //     dict1[process7_priority] = process7_name;
        //     array1.push(process7_priority);
        // }
        // if (process8_priority != 0) {
        //     dict1[process8_priority] = process8_name;
        //     array1.push(process8_priority);
        // }
        // if (process9_priority != 0) {
        //     dict1[process9_priority] = process9_name;
        //     array1.push(process9_priority);
        // }
        if (process1_priority != 0) {
            array1.push(process1_priority);
            dict1[process1_priority] = process1_value;
        }
        if (process2_priority != 0) {
            dict1[process2_priority] = process2_value;
            array1.push(process2_priority);
        }
        if (process3_priority != 0) {
            dict1[process3_priority] = process3_value;
            array1.push(process3_priority);
        }
        if (process4_priority != 0) {
            dict1[process4_priority] = process4_value;
            array1.push(process4_priority);
        }
        if (process5_priority != 0) {
            dict1[process5_priority] = process5_value;
            array1.push(process5_priority);
        }
        if (process6_priority != 0) {
            dict1[process6_priority] = process6_value;
            array1.push(process6_priority);
        }
        if (process7_priority != 0) {
            dict1[process7_priority] = process7_value;
            array1.push(process7_priority);
        }
        if (process8_priority != 0) {
            dict1[process8_priority] = process8_value;
            array1.push(process8_priority);
        }
        if (process9_priority != 0) {
            dict1[process9_priority] = process9_value;
            array1.push(process9_priority);
        }

        array1.sort();
        var wt = [], avwt = 0, avtat = 0;
        var tat = []
        wt[0] = 0;
        for (var i = 1; i < number; i++) {
            wt[i] = 0;
            for (j = 0; j < i; j++)
                wt[i] += dict1[array1[j]];
        }
        for (i = 0; i < number; i++) {
            tat[i] = dict1[array1[i]] + wt[i];
            avwt += wt[i];
            avtat += tat[i];

        }
        for (var i = 0; i < array1.length; i++) {
            var xam = dict1[array1[i].toString()];
            var ram = wt[i];
            var lam = tat[i];
            process_order = process_order + "," + xam;
            waiting_time = waiting_time + "," + ram;
            turn_around_time = turn_around_time + "," + lam;
        }
        ans.innerHTML = average_time;
        ans1.innerHTML = process_order;
        ans2.innerHTML = waiting_time;
        ans3.innerHTML = turn_around_time;
        // for (var i = 0; i < array1.length; i++) {
        //     var xam = dict1[array1[i].toString()];
        //     process_order = process_order + "," + xam;
        // }

        // ans.innerHTML = average_time;
        // ans1.innerHTML = process_order;


    }
    else if (value == 4) {
        //round robin
        var yourUl3 = document.getElementById("round_form");
        yourUl3.style.display = yourUl3.style.display === 'none' ? '' : 'none';
        var time_quantum = document.getElementById("round_quantum_time");
        var process1_arrival = document.getElementById('round_priority_1').value * 1;
        var process2_arrival = document.getElementById('round_priority_2').value * 1;
        var process3_arrival = document.getElementById('round_priority_3').value * 1;
        var process4_arrival = document.getElementById('round_priority_4').value * 1;
        var process5_arrival = document.getElementById('round_priority_5').value * 1;
        var process6_arrival = document.getElementById('round_priority_6').value * 1;
        var process7_arrival = document.getElementById('round_priority_7').value * 1;
        var process8_arrival = document.getElementById('round_priority_8').value * 1;
        var process9_arrival = document.getElementById('round_priority_9').value * 1;
        var count, j, n, time, remain, flag = 0;
        var wait_time = 0, turnaround_time = 0;
        var at = [], bt = [], rt = [];
        n = number;
        remain = n;
        at = [process1_arrival, process2_arrival, process3_arrival, process4_arrival, process5_arrival, process6_arrival, process7_arrival, process8_arrival, process9_arrival];
        for (count = 0; count < n; count++) {
            bt[count] = array[count];
            rt[count] = bt[count];
        }
        for (time = 0, count = 0; remain != 0;) {
            if (rt[count] <= time_quantum && rt[count] > 0) {
                time += rt[count];
                rt[count] = 0;
                flag = 1;
            }
            else if (rt[count] > 0) {
                rt[count] -= time_quantum;
                time += time_quantum;
            }
            if (rt[count] == 0 && flag == 1) {
                remain--;
                var temporary = count + 1;
                process_order = process_order + ',' + temporary;
                wait_time += time - at[count] - bt[count];
                turnaround_time += time - at[count];
                flag = 0;
            }
            if (count == n - 1)
                count = 0;
            else if (at[count + 1] <= time)
                count++;
            else
                count = 0;
        }
        ans.innerHTML = average_time;
        ans1.innerHTML = process_order;
    }

}

