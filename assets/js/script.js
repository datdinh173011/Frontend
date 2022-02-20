var xDevices = []
var MacAddress = []
var Ip = []
var CreatedDate = []
var yPowerConsumption = []

var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145",
    "#b3b300"
];

var tableData = [{
        "Devices": "TV",
        "MAC_Address": "00:18:44:3A:B7",
        "IP": "127.0.0.3",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 50
    },
    {
        "Devices": "Washer",
        "MAC_Address": "00:18:44:3A:B8",
        "IP": "127.0.0.2",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 60
    },
    {
        "Devices": "Refrigerator",
        "MAC_Address": "00:18:44:3A:B9",
        "IP": "127.0.0.4",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 40
    },
    {
        "Devices": "Ceiling Fan",
        "MAC_Address": "00:18:44:3A:BA",
        "IP": "127.0.0.5",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 35
    },
    {
        "Devices": "Ceiling Lamp",
        "MAC_Address": "00:18:44:3A:BB",
        "IP": "127.0.0.6",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 10
    },
    {
        "Devices": "Computer",
        "MAC_Address": "00:18:44:3A:BC",
        "IP": "127.0.0.7",
        "Created_Date": "2021-05-31",
        "Power_Consumption": 300
    }
]

buildTable(tableData)

function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${tableData[i].Devices} </td>
                    <td>${tableData[i].MAC_Address} </td>
                    <td>${tableData[i].IP} </td>
                    <td>${tableData[i].Created_Date} </td>
                    <td> ${tableData[i].Power_Consumption}</td>
                </tr> `
        table.innerHTML += row
    }
}

appendData(tableData)

function appendData(data) {
    var mainContainer = document.getElementById("myData");

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div")
        xDevices.push(data[i].Devices);
        yPowerConsumption.push(data[i].Power_Consumption);
    }
}

new Chart("myChart", {
    type: "pie",
    data: {
        labels: xDevices,
        datasets: [{
            backgroundColor: barColors,
            data: yPowerConsumption
        }]
    },
    options: {
        title: {
            display: true,
            text: ""
        }
    }
});