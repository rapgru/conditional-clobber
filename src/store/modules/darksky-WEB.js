/* eslint-disable quote-props */
/* eslint-disable key-spacing */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */

export function darkskyForecast(f, location, unit) {
  f({"latitude":48.477231,"longitude":15.673781,"timezone":"Europe/Vienna","currently":{"time":1557163230,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":47.68,"apparentTemperature":43.22,"dewPoint":33.93,"humidity":0.59,"pressure":1016.87,"windSpeed":9.84,"windGust":19.23,"windBearing":317,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":419.97},"hourly":{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-night","data":[{"time":1557162000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":48.2,"apparentTemperature":43.7,"dewPoint":33.96,"humidity":0.58,"pressure":1016.72,"windSpeed":10.28,"windGust":19.52,"windBearing":319,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":420.25},{"time":1557165600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":46.69,"apparentTemperature":42.3,"dewPoint":33.85,"humidity":0.61,"pressure":1017.16,"windSpeed":9.04,"windGust":18.67,"windBearing":313,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":419.44},{"time":1557169200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":45.03,"apparentTemperature":40.55,"dewPoint":33.79,"humidity":0.64,"pressure":1017.85,"windSpeed":8.38,"windGust":16.89,"windBearing":307,"cloudCover":0.9,"uvIndex":0,"visibility":10,"ozone":419.04},{"time":1557172800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":43.26,"apparentTemperature":38.55,"dewPoint":33.64,"humidity":0.69,"pressure":1018.71,"windSpeed":8,"windGust":14.64,"windBearing":303,"cloudCover":0.76,"uvIndex":0,"visibility":10,"ozone":418.98},{"time":1557176400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":41.59,"apparentTemperature":36.63,"dewPoint":33.33,"humidity":0.72,"pressure":1019.34,"windSpeed":7.8,"windGust":12.97,"windBearing":299,"cloudCover":0.64,"uvIndex":0,"visibility":10,"ozone":419.03},{"time":1557180000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":40.32,"apparentTemperature":35.19,"dewPoint":32.8,"humidity":0.74,"pressure":1019.61,"windSpeed":7.61,"windGust":12.38,"windBearing":301,"cloudCover":0.53,"uvIndex":0,"visibility":10,"ozone":419.63},{"time":1557183600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":39.46,"apparentTemperature":34.24,"dewPoint":32.16,"humidity":0.75,"pressure":1019.73,"windSpeed":7.42,"windGust":12.36,"windBearing":292,"cloudCover":0.43,"uvIndex":0,"visibility":10,"ozone":420.44},{"time":1557187200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":38.69,"apparentTemperature":33.15,"dewPoint":31.57,"humidity":0.75,"pressure":1019.77,"windSpeed":7.72,"windGust":12.29,"windBearing":295,"cloudCover":0.32,"uvIndex":0,"visibility":10,"ozone":419.98},{"time":1557190800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":37.68,"apparentTemperature":32.01,"dewPoint":31.06,"humidity":0.77,"pressure":1019.92,"windSpeed":7.56,"windGust":11.77,"windBearing":292,"cloudCover":0.2,"uvIndex":0,"visibility":10,"ozone":416.73},{"time":1557194400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":36.79,"apparentTemperature":31.05,"dewPoint":30.62,"humidity":0.78,"pressure":1020,"windSpeed":7.36,"windGust":11.21,"windBearing":289,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":412.15},{"time":1557198000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":36.87,"apparentTemperature":31.15,"dewPoint":30.65,"humidity":0.78,"pressure":1020.07,"windSpeed":7.34,"windGust":11.2,"windBearing":287,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":408.64},{"time":1557201600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":38.44,"apparentTemperature":32.82,"dewPoint":31.45,"humidity":0.76,"pressure":1020.1,"windSpeed":7.76,"windGust":12.39,"windBearing":288,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":407.25},{"time":1557205200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":41.15,"apparentTemperature":35.82,"dewPoint":32.79,"humidity":0.72,"pressure":1020.12,"windSpeed":8.35,"windGust":14.14,"windBearing":289,"cloudCover":0.07,"uvIndex":0,"visibility":10,"ozone":406.82},{"time":1557208800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":43.99,"apparentTemperature":39.14,"dewPoint":33.84,"humidity":0.67,"pressure":1020.05,"windSpeed":8.69,"windGust":15.1,"windBearing":292,"cloudCover":0.1,"uvIndex":1,"visibility":10,"ozone":406.67},{"time":1557212400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":46.7,"apparentTemperature":42.59,"dewPoint":34.29,"humidity":0.62,"pressure":1019.94,"windSpeed":8.37,"windGust":14.56,"windBearing":294,"cloudCover":0.07,"uvIndex":2,"visibility":10,"ozone":406.54},{"time":1557216000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":49.53,"apparentTemperature":46.04,"dewPoint":34.44,"humidity":0.56,"pressure":1019.77,"windSpeed":8.4,"windGust":13.22,"windBearing":308,"cloudCover":0.01,"uvIndex":3,"visibility":10,"ozone":406.82},{"time":1557219600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":51.49,"apparentTemperature":51.49,"dewPoint":34.6,"humidity":0.52,"pressure":1019.44,"windSpeed":8.13,"windGust":11.79,"windBearing":311,"cloudCover":0,"uvIndex":4,"visibility":10,"ozone":406.66},{"time":1557223200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":53.03,"apparentTemperature":53.03,"dewPoint":34.85,"humidity":0.5,"pressure":1018.96,"windSpeed":6.62,"windGust":10.36,"windBearing":307,"cloudCover":0.07,"uvIndex":5,"visibility":10,"ozone":405.8},{"time":1557226800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":53.81,"apparentTemperature":53.81,"dewPoint":35.14,"humidity":0.49,"pressure":1018.34,"windSpeed":5.51,"windGust":8.87,"windBearing":265,"cloudCover":0.19,"uvIndex":5,"visibility":10,"ozone":404.62},{"time":1557230400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":55.2,"apparentTemperature":55.2,"dewPoint":35.41,"humidity":0.47,"pressure":1017.78,"windSpeed":4.94,"windGust":7.63,"windBearing":288,"cloudCover":0.33,"uvIndex":4,"visibility":10,"ozone":403.69},{"time":1557234000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.54,"apparentTemperature":56.54,"dewPoint":35.61,"humidity":0.45,"pressure":1017.37,"windSpeed":4.18,"windGust":6.89,"windBearing":12,"cloudCover":0.51,"uvIndex":3,"visibility":10,"ozone":403.46},{"time":1557237600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.48,"apparentTemperature":57.48,"dewPoint":35.78,"humidity":0.44,"pressure":1017,"windSpeed":4.12,"windGust":6.4,"windBearing":168,"cloudCover":0.7,"uvIndex":2,"visibility":10,"ozone":403.39},{"time":1557241200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.5,"apparentTemperature":57.5,"dewPoint":36.15,"humidity":0.45,"pressure":1016.76,"windSpeed":4.09,"windGust":5.87,"windBearing":242,"cloudCover":0.84,"uvIndex":1,"visibility":10,"ozone":402.82},{"time":1557244800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.73,"apparentTemperature":56.73,"dewPoint":37.04,"humidity":0.48,"pressure":1016.69,"windSpeed":3.55,"windGust":5.11,"windBearing":241,"cloudCover":0.88,"uvIndex":1,"visibility":10,"ozone":401.43},{"time":1557248400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":54.28,"apparentTemperature":54.28,"dewPoint":38.12,"humidity":0.54,"pressure":1016.78,"windSpeed":2.95,"windGust":4.3,"windBearing":207,"cloudCover":0.88,"uvIndex":0,"visibility":10,"ozone":399.65},{"time":1557252000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":51.81,"apparentTemperature":51.81,"dewPoint":38.49,"humidity":0.6,"pressure":1016.94,"windSpeed":2.73,"windGust":3.75,"windBearing":180,"cloudCover":0.87,"uvIndex":0,"visibility":10,"ozone":397.78},{"time":1557255600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":49.22,"apparentTemperature":49.22,"dewPoint":37.55,"humidity":0.64,"pressure":1017.29,"windSpeed":2.74,"windGust":3.71,"windBearing":167,"cloudCover":0.89,"uvIndex":0,"visibility":10,"ozone":395.78},{"time":1557259200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":46.85,"apparentTemperature":46.07,"dewPoint":35.9,"humidity":0.65,"pressure":1017.74,"windSpeed":3.04,"windGust":3.94,"windBearing":158,"cloudCover":0.91,"uvIndex":0,"visibility":10,"ozone":393.84},{"time":1557262800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":44.63,"apparentTemperature":43.25,"dewPoint":34.6,"humidity":0.68,"pressure":1018.03,"windSpeed":3.35,"windGust":3.98,"windBearing":154,"cloudCover":0.89,"uvIndex":0,"visibility":10,"ozone":392.05},{"time":1557266400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":43.01,"apparentTemperature":41.4,"dewPoint":34.08,"humidity":0.71,"pressure":1018,"windSpeed":3.35,"windGust":3.6,"windBearing":153,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":390.63},{"time":1557270000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":41.83,"apparentTemperature":40.14,"dewPoint":33.9,"humidity":0.73,"pressure":1017.8,"windSpeed":3.26,"windGust":3.35,"windBearing":152,"cloudCover":0.66,"uvIndex":0,"visibility":10,"ozone":389.46},{"time":1557273600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":40.75,"apparentTemperature":39.15,"dewPoint":33.7,"humidity":0.76,"pressure":1017.55,"windSpeed":3.06,"windGust":3.11,"windBearing":149,"cloudCover":0.55,"uvIndex":0,"visibility":10,"ozone":388.66},{"time":1557277200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":39.2,"apparentTemperature":39.2,"dewPoint":33.06,"humidity":0.78,"pressure":1017.3,"windSpeed":2.55,"windGust":2.65,"windBearing":138,"cloudCover":0.49,"uvIndex":0,"visibility":10,"ozone":388.63},{"time":1557280800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":37.62,"apparentTemperature":37.62,"dewPoint":32.41,"humidity":0.81,"pressure":1016.98,"windSpeed":1.85,"windGust":2.07,"windBearing":107,"cloudCover":0.45,"uvIndex":0,"visibility":10,"ozone":389.04},{"time":1557284400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":37.01,"apparentTemperature":37.01,"dewPoint":32.38,"humidity":0.83,"pressure":1016.62,"windSpeed":1.6,"windGust":1.87,"windBearing":88,"cloudCover":0.41,"uvIndex":0,"visibility":10,"ozone":388.94},{"time":1557288000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":38.92,"apparentTemperature":38.92,"dewPoint":33.33,"humidity":0.8,"pressure":1016.21,"windSpeed":1.92,"windGust":2.23,"windBearing":102,"cloudCover":0.33,"uvIndex":0,"visibility":10,"ozone":387.92},{"time":1557291600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":42.44,"apparentTemperature":42.44,"dewPoint":34.92,"humidity":0.74,"pressure":1015.76,"windSpeed":2.88,"windGust":3.18,"windBearing":91,"cloudCover":0.26,"uvIndex":0,"visibility":10,"ozone":386.38},{"time":1557295200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":46.22,"apparentTemperature":44.65,"dewPoint":36.76,"humidity":0.69,"pressure":1015.24,"windSpeed":3.82,"windGust":4.77,"windBearing":86,"cloudCover":0.22,"uvIndex":1,"visibility":10,"ozone":385.01},{"time":1557298800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":49.85,"apparentTemperature":48.28,"dewPoint":39,"humidity":0.66,"pressure":1014.61,"windSpeed":4.61,"windGust":6.94,"windBearing":91,"cloudCover":0.24,"uvIndex":2,"visibility":10,"ozone":384.21},{"time":1557302400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":53.53,"apparentTemperature":53.53,"dewPoint":41.5,"humidity":0.64,"pressure":1013.91,"windSpeed":5.45,"windGust":9.49,"windBearing":104,"cloudCover":0.3,"uvIndex":3,"visibility":10,"ozone":383.52},{"time":1557306000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.78,"apparentTemperature":56.78,"dewPoint":43.52,"humidity":0.61,"pressure":1013.08,"windSpeed":6.47,"windGust":11.7,"windBearing":113,"cloudCover":0.36,"uvIndex":4,"visibility":10,"ozone":382.6},{"time":1557309600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":59.87,"apparentTemperature":59.87,"dewPoint":44.69,"humidity":0.57,"pressure":1012.07,"windSpeed":7.98,"windGust":13.11,"windBearing":118,"cloudCover":0.4,"uvIndex":5,"visibility":10,"ozone":381.09},{"time":1557313200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.42,"apparentTemperature":62.42,"dewPoint":45.35,"humidity":0.54,"pressure":1010.97,"windSpeed":9.74,"windGust":14.16,"windBearing":120,"cloudCover":0.45,"uvIndex":5,"visibility":10,"ozone":379.3},{"time":1557316800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.32,"apparentTemperature":65.32,"dewPoint":45.79,"humidity":0.49,"pressure":1009.86,"windSpeed":11.28,"windGust":15.68,"windBearing":123,"cloudCover":0.47,"uvIndex":4,"visibility":10,"ozone":377.6},{"time":1557320400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.1,"apparentTemperature":67.1,"dewPoint":46.03,"humidity":0.47,"pressure":1008.75,"windSpeed":12.62,"windGust":18.23,"windBearing":130,"cloudCover":0.45,"uvIndex":4,"visibility":10,"ozone":375.97},{"time":1557324000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.81,"apparentTemperature":67.81,"dewPoint":46.03,"humidity":0.46,"pressure":1007.65,"windSpeed":13.72,"windGust":21.2,"windBearing":139,"cloudCover":0.42,"uvIndex":3,"visibility":10,"ozone":374.43},{"time":1557327600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.03,"apparentTemperature":67.03,"dewPoint":45.96,"humidity":0.47,"pressure":1006.74,"windSpeed":14.2,"windGust":23.83,"windBearing":142,"cloudCover":0.42,"uvIndex":2,"visibility":10,"ozone":373.25},{"time":1557331200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.53,"apparentTemperature":65.53,"dewPoint":45.95,"humidity":0.49,"pressure":1006.09,"windSpeed":13.73,"windGust":26.56,"windBearing":142,"cloudCover":0.48,"uvIndex":1,"visibility":10,"ozone":372.75},{"time":1557334800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.52,"apparentTemperature":62.52,"dewPoint":45.86,"humidity":0.54,"pressure":1005.62,"windSpeed":12.6,"windGust":28.92,"windBearing":137,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":372.49}]},"daily":{"summary":"Light rain today through Sunday, with high temperatures rising to 68°F on Saturday.","icon":"rain","data":[{"time":1557093600,"summary":"Foggy in the morning.","icon":"fog","sunriseTime":1557113484,"sunsetTime":1557166742,"moonPhase":0.05,"precipIntensity":0.0036,"precipIntensityMax":0.0136,"precipIntensityMaxTime":1557108000,"precipProbability":0.72,"precipType":"rain","temperatureHigh":51.21,"temperatureHighTime":1557147600,"temperatureLow":36.79,"temperatureLowTime":1557194400,"apparentTemperatureHigh":51.21,"apparentTemperatureHighTime":1557147600,"apparentTemperatureLow":31.05,"apparentTemperatureLowTime":1557194400,"dewPoint":33.95,"humidity":0.68,"pressure":1016.36,"windSpeed":10.95,"windGust":22.97,"windGustTime":1557111600,"windBearing":327,"cloudCover":0.91,"uvIndex":3,"uvIndexTime":1557133200,"visibility":7.64,"ozone":417.22,"temperatureMin":38.93,"temperatureMinTime":1557115200,"temperatureMax":51.21,"temperatureMaxTime":1557147600,"apparentTemperatureMin":31.87,"apparentTemperatureMinTime":1557118800,"apparentTemperatureMax":51.21,"apparentTemperatureMaxTime":1557147600},{"time":1557180000,"summary":"Mostly cloudy starting in the afternoon.","icon":"partly-cloudy-night","sunriseTime":1557199792,"sunsetTime":1557253228,"moonPhase":0.08,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1557208800,"precipProbability":0,"temperatureHigh":57.5,"temperatureHighTime":1557241200,"temperatureLow":37.01,"temperatureLowTime":1557284400,"apparentTemperatureHigh":57.5,"apparentTemperatureHighTime":1557241200,"apparentTemperatureLow":37.01,"apparentTemperatureLowTime":1557284400,"dewPoint":34.37,"humidity":0.62,"pressure":1018.67,"windSpeed":4.47,"windGust":15.1,"windGustTime":1557208800,"windBearing":285,"cloudCover":0.41,"uvIndex":5,"uvIndexTime":1557223200,"visibility":10,"ozone":405.94,"temperatureMin":36.79,"temperatureMinTime":1557194400,"temperatureMax":57.5,"temperatureMaxTime":1557241200,"apparentTemperatureMin":31.05,"apparentTemperatureMinTime":1557194400,"apparentTemperatureMax":57.5,"apparentTemperatureMaxTime":1557241200},{"time":1557266400,"summary":"Partly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1557286101,"sunsetTime":1557339713,"moonPhase":0.12,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1557338400,"precipProbability":0,"temperatureHigh":67.81,"temperatureHighTime":1557324000,"temperatureLow":47.18,"temperatureLowTime":1557370800,"apparentTemperatureHigh":67.81,"apparentTemperatureHighTime":1557324000,"apparentTemperatureLow":44.31,"apparentTemperatureLowTime":1557374400,"dewPoint":40.39,"humidity":0.64,"pressure":1011.73,"windSpeed":6.95,"windGust":28.92,"windGustTime":1557334800,"windBearing":129,"cloudCover":0.5,"uvIndex":5,"uvIndexTime":1557309600,"visibility":10,"ozone":380.34,"temperatureMin":37.01,"temperatureMinTime":1557284400,"temperatureMax":67.81,"temperatureMaxTime":1557324000,"apparentTemperatureMin":37.01,"apparentTemperatureMinTime":1557284400,"apparentTemperatureMax":67.81,"apparentTemperatureMaxTime":1557324000},{"time":1557352800,"summary":"Light rain in the morning.","icon":"rain","sunriseTime":1557372412,"sunsetTime":1557426197,"moonPhase":0.15,"precipIntensity":0.0114,"precipIntensityMax":0.0374,"precipIntensityMaxTime":1557381600,"precipProbability":0.96,"precipType":"rain","temperatureHigh":60.39,"temperatureHighTime":1557414000,"temperatureLow":46.83,"temperatureLowTime":1557457200,"apparentTemperatureHigh":60.39,"apparentTemperatureHighTime":1557414000,"apparentTemperatureLow":42.03,"apparentTemperatureLowTime":1557457200,"dewPoint":45.23,"humidity":0.75,"pressure":1004.71,"windSpeed":6.03,"windGust":24.92,"windGustTime":1557374400,"windBearing":269,"cloudCover":0.92,"uvIndex":3,"uvIndexTime":1557392400,"visibility":5.45,"ozone":383.12,"temperatureMin":47.18,"temperatureMinTime":1557370800,"temperatureMax":60.39,"temperatureMaxTime":1557414000,"apparentTemperatureMin":44.31,"apparentTemperatureMinTime":1557374400,"apparentTemperatureMax":60.39,"apparentTemperatureMaxTime":1557414000},{"time":1557439200,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1557458725,"sunsetTime":1557512681,"moonPhase":0.19,"precipIntensity":0.0006,"precipIntensityMax":0.0028,"precipIntensityMaxTime":1557511200,"precipProbability":0.2,"precipType":"rain","temperatureHigh":67.72,"temperatureHighTime":1557496800,"temperatureLow":47.17,"temperatureLowTime":1557543600,"apparentTemperatureHigh":67.72,"apparentTemperatureHighTime":1557496800,"apparentTemperatureLow":46.62,"apparentTemperatureLowTime":1557540000,"dewPoint":44.27,"humidity":0.67,"pressure":1011.03,"windSpeed":7.58,"windGust":26.12,"windGustTime":1557446400,"windBearing":267,"cloudCover":0.57,"uvIndex":4,"uvIndexTime":1557482400,"visibility":10,"ozone":373.74,"temperatureMin":46.83,"temperatureMinTime":1557457200,"temperatureMax":67.72,"temperatureMaxTime":1557496800,"apparentTemperatureMin":42.03,"apparentTemperatureMinTime":1557457200,"apparentTemperatureMax":67.72,"apparentTemperatureMaxTime":1557496800},{"time":1557525600,"summary":"Rain starting in the evening.","icon":"rain","sunriseTime":1557545040,"sunsetTime":1557599165,"moonPhase":0.23,"precipIntensity":0.0137,"precipIntensityMax":0.063,"precipIntensityMaxTime":1557608400,"precipProbability":0.81,"precipType":"rain","temperatureHigh":68.26,"temperatureHighTime":1557583200,"temperatureLow":45.97,"temperatureLowTime":1557640800,"apparentTemperatureHigh":68.26,"apparentTemperatureHighTime":1557583200,"apparentTemperatureLow":39.3,"apparentTemperatureLowTime":1557640800,"dewPoint":47.56,"humidity":0.72,"pressure":1012.49,"windSpeed":1.59,"windGust":37.24,"windGustTime":1557608400,"windBearing":42,"cloudCover":0.97,"uvIndex":4,"uvIndexTime":1557568800,"visibility":8.19,"ozone":351.95,"temperatureMin":47.17,"temperatureMinTime":1557543600,"temperatureMax":68.26,"temperatureMaxTime":1557583200,"apparentTemperatureMin":46.62,"apparentTemperatureMinTime":1557540000,"apparentTemperatureMax":68.26,"apparentTemperatureMaxTime":1557583200},{"time":1557612000,"summary":"Overcast throughout the day and breezy until evening.","icon":"wind","sunriseTime":1557631356,"sunsetTime":1557685648,"moonPhase":0.27,"precipIntensity":0.0043,"precipIntensityMax":0.0388,"precipIntensityMaxTime":1557612000,"precipProbability":0.91,"precipType":"rain","temperatureHigh":54.1,"temperatureHighTime":1557669600,"temperatureLow":44.39,"temperatureLowTime":1557716400,"apparentTemperatureHigh":54.1,"apparentTemperatureHighTime":1557669600,"apparentTemperatureLow":37.78,"apparentTemperatureLowTime":1557716400,"dewPoint":39.06,"humidity":0.69,"pressure":1021.41,"windSpeed":13.63,"windGust":39.17,"windGustTime":1557612000,"windBearing":318,"cloudCover":1,"uvIndex":4,"uvIndexTime":1557658800,"visibility":5.14,"ozone":356.81,"temperatureMin":45.97,"temperatureMinTime":1557640800,"temperatureMax":54.1,"temperatureMaxTime":1557669600,"apparentTemperatureMin":39.3,"apparentTemperatureMinTime":1557640800,"apparentTemperatureMax":54.1,"apparentTemperatureMaxTime":1557669600},{"time":1557698400,"summary":"Mostly cloudy until afternoon and breezy in the afternoon.","icon":"wind","sunriseTime":1557717674,"sunsetTime":1557772130,"moonPhase":0.3,"precipIntensity":0.0001,"precipIntensityMax":0.0016,"precipIntensityMaxTime":1557698400,"precipProbability":0.14,"precipType":"rain","temperatureHigh":58.92,"temperatureHighTime":1557756000,"temperatureLow":45.12,"temperatureLowTime":1557799200,"apparentTemperatureHigh":58.92,"apparentTemperatureHighTime":1557756000,"apparentTemperatureLow":39.71,"apparentTemperatureLowTime":1557799200,"dewPoint":37.2,"humidity":0.61,"pressure":1027.67,"windSpeed":13.5,"windGust":27.06,"windGustTime":1557698400,"windBearing":329,"cloudCover":0.61,"uvIndex":5,"uvIndexTime":1557748800,"visibility":9.52,"ozone":347.4,"temperatureMin":44.39,"temperatureMinTime":1557716400,"temperatureMax":58.92,"temperatureMaxTime":1557756000,"apparentTemperatureMin":37.78,"apparentTemperatureMinTime":1557716400,"apparentTemperatureMax":58.92,"apparentTemperatureMaxTime":1557756000}]},"flags":{"sources":["meteoalarm","cmc","gfs","icon","isd","madis"],"meteoalarm-license":"Based on data from EUMETNET - MeteoAlarm [https://www.meteoalarm.eu/]. Time delays between this website and the MeteoAlarm website are possible; for the most up to date information about alert levels as published by the participating National Meteorological Services please use the MeteoAlarm website.","nearest-station":1.394,"units":"us"},"offset":2});
}

export function darkskyTimeMachine(f, location, time, unit) {
  f({"latitude":48.477231,"longitude":15.673781,"timezone":"Europe/Vienna","currently":{"time":1557525600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":9.42,"apparentTemperature":8.42,"dewPoint":4.92,"humidity":0.73,"pressure":1015.17,"windSpeed":7.6,"windGust":18.65,"windBearing":271,"cloudCover":0.35,"uvIndex":0,"visibility":16.09,"ozone":372.64},"hourly":{"summary":"Rain starting in the evening.","icon":"rain","data":[{"time":1557525600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":9.42,"apparentTemperature":8.42,"dewPoint":4.92,"humidity":0.73,"pressure":1015.17,"windSpeed":7.6,"windGust":18.65,"windBearing":271,"cloudCover":0.35,"uvIndex":0,"visibility":16.09,"ozone":372.64},{"time":1557529200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":8.83,"apparentTemperature":7.99,"dewPoint":4.91,"humidity":0.76,"pressure":1015.2,"windSpeed":6.57,"windGust":13.95,"windBearing":243,"cloudCover":0.01,"uvIndex":0,"visibility":16.09,"ozone":373.49},{"time":1557532800,"summary":"Clear","icon":"clear-night","precipIntensity":0.0051,"precipProbability":0.03,"precipType":"rain","temperature":8.57,"apparentTemperature":7.74,"dewPoint":5.71,"humidity":0.82,"pressure":1014.97,"windSpeed":6.36,"windGust":9.98,"windBearing":252,"cloudCover":0,"uvIndex":0,"visibility":16.09,"ozone":373.49},{"time":1557536400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":7.97,"apparentTemperature":7.17,"dewPoint":5.38,"humidity":0.84,"pressure":1014.76,"windSpeed":5.94,"windGust":8.95,"windBearing":261,"cloudCover":0.03,"uvIndex":0,"visibility":16.09,"ozone":375.57},{"time":1557540000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":7.36,"apparentTemperature":6.79,"dewPoint":4.71,"humidity":0.83,"pressure":1014.69,"windSpeed":4.96,"windGust":6.74,"windBearing":258,"cloudCover":0.35,"uvIndex":0,"visibility":16.09,"ozone":372.18},{"time":1557543600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":7.22,"apparentTemperature":7.22,"dewPoint":4.49,"humidity":0.83,"pressure":1014.54,"windSpeed":4.31,"windGust":5.21,"windBearing":258,"cloudCover":0.4,"uvIndex":0,"visibility":16.09,"ozone":369.22},{"time":1557547200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":7.64,"apparentTemperature":7.64,"dewPoint":5.09,"humidity":0.84,"pressure":1014.33,"windSpeed":3.89,"windGust":4.12,"windBearing":238,"cloudCover":0.46,"uvIndex":0,"visibility":16.09,"ozone":367.46},{"time":1557550800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":9.25,"apparentTemperature":9.25,"dewPoint":6.14,"humidity":0.81,"pressure":1013.97,"windSpeed":3.59,"windGust":4.02,"windBearing":169,"cloudCover":0.33,"uvIndex":0,"visibility":16.09,"ozone":366.1},{"time":1557554400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":11.38,"apparentTemperature":11.38,"dewPoint":6.89,"humidity":0.74,"pressure":1013.36,"windSpeed":3.3,"windGust":3.85,"windBearing":82,"cloudCover":0.2,"uvIndex":1,"visibility":16.09,"ozone":357.96},{"time":1557558000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":13.13,"apparentTemperature":13.13,"dewPoint":7.72,"humidity":0.7,"pressure":1012.93,"windSpeed":5.44,"windGust":7.76,"windBearing":103,"cloudCover":0.35,"uvIndex":2,"visibility":16.09,"ozone":357.39},{"time":1557561600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":15.21,"apparentTemperature":15.21,"dewPoint":8.52,"humidity":0.64,"pressure":1012.65,"windSpeed":7.15,"windGust":13.49,"windBearing":110,"cloudCover":0.66,"uvIndex":3,"visibility":16.09,"ozone":358.23},{"time":1557565200,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":16.57,"apparentTemperature":16.57,"dewPoint":9.18,"humidity":0.62,"pressure":1012.34,"windSpeed":7.82,"windGust":17.01,"windBearing":129,"cloudCover":1,"uvIndex":3,"visibility":16.09,"ozone":359.13},{"time":1557568800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0508,"precipProbability":0.11,"precipType":"rain","temperature":17.29,"apparentTemperature":17.29,"dewPoint":9.57,"humidity":0.61,"pressure":1012.2,"windSpeed":8.64,"windGust":16.17,"windBearing":151,"cloudCover":0.97,"uvIndex":3,"visibility":16.09,"ozone":359.76},{"time":1557572400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0432,"precipProbability":0.1,"precipType":"rain","temperature":18.15,"apparentTemperature":18.15,"dewPoint":9.79,"humidity":0.58,"pressure":1011.64,"windSpeed":10.38,"windGust":13.08,"windBearing":172,"cloudCover":0.96,"uvIndex":4,"visibility":16.09,"ozone":360.5},{"time":1557576000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0432,"precipProbability":0.1,"precipType":"rain","temperature":19,"apparentTemperature":19,"dewPoint":9.97,"humidity":0.56,"pressure":1011.19,"windSpeed":10.43,"windGust":10.81,"windBearing":205,"cloudCover":0.93,"uvIndex":4,"visibility":16.09,"ozone":361.1},{"time":1557579600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0635,"precipProbability":0.1,"precipType":"rain","temperature":20.06,"apparentTemperature":20.06,"dewPoint":10.12,"humidity":0.53,"pressure":1010.76,"windSpeed":9.46,"windGust":9.82,"windBearing":218,"cloudCover":0.67,"uvIndex":4,"visibility":15.92,"ozone":361.49},{"time":1557583200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0559,"precipProbability":0.13,"precipType":"rain","temperature":19.61,"apparentTemperature":19.61,"dewPoint":10.23,"humidity":0.55,"pressure":1010.42,"windSpeed":7.92,"windGust":9.24,"windBearing":226,"cloudCover":0.8,"uvIndex":3,"visibility":15.98,"ozone":361.71},{"time":1557586800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1118,"precipProbability":0.2,"precipType":"rain","temperature":19.76,"apparentTemperature":19.76,"dewPoint":10.37,"humidity":0.55,"pressure":1010.27,"windSpeed":7.72,"windGust":9.83,"windBearing":203,"cloudCover":0.99,"uvIndex":2,"visibility":15.05,"ozone":361.64},{"time":1557590400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.3404,"precipProbability":0.35,"precipType":"rain","temperature":19,"apparentTemperature":19,"dewPoint":10.72,"humidity":0.59,"pressure":1010.55,"windSpeed":7.87,"windGust":11.33,"windBearing":163,"cloudCover":0.99,"uvIndex":1,"visibility":11.7,"ozone":361.05},{"time":1557594000,"summary":"Light Rain","icon":"rain","precipIntensity":0.701,"precipProbability":0.54,"precipType":"rain","temperature":17.11,"apparentTemperature":17.11,"dewPoint":11.13,"humidity":0.68,"pressure":1011.14,"windSpeed":6.94,"windGust":13.81,"windBearing":336,"cloudCover":1,"uvIndex":0,"visibility":7.32,"ozone":360.21},{"time":1557597600,"summary":"Light Rain","icon":"rain","precipIntensity":1.0897,"precipProbability":0.64,"precipType":"rain","temperature":15.13,"apparentTemperature":15.13,"dewPoint":11.22,"humidity":0.77,"pressure":1011.73,"windSpeed":8.51,"windGust":17.65,"windBearing":292,"cloudCover":1,"uvIndex":0,"visibility":4.47,"ozone":359.67},{"time":1557601200,"summary":"Light Rain","icon":"rain","precipIntensity":1.1862,"precipProbability":0.73,"precipType":"rain","temperature":13.8,"apparentTemperature":13.8,"dewPoint":10.72,"humidity":0.82,"pressure":1012.35,"windSpeed":9.59,"windGust":24.4,"windBearing":279,"cloudCover":1,"uvIndex":0,"visibility":4.57,"ozone":360},{"time":1557604800,"summary":"Rain","icon":"rain","precipIntensity":1.9152,"precipProbability":0.82,"precipType":"rain","temperature":12.73,"apparentTemperature":12.73,"dewPoint":9.88,"humidity":0.83,"pressure":1013,"windSpeed":11.94,"windGust":32.52,"windBearing":280,"cloudCover":1,"uvIndex":0,"visibility":6.16,"ozone":360.62},{"time":1557608400,"summary":"Rain","icon":"rain","precipIntensity":1.872,"precipProbability":0.82,"precipType":"rain","temperature":11.92,"apparentTemperature":11.92,"dewPoint":9.17,"humidity":0.83,"pressure":1013.65,"windSpeed":14.93,"windGust":38.04,"windBearing":261,"cloudCover":1,"uvIndex":0,"visibility":7.47,"ozone":360.73}]},"daily":{"data":[{"time":1557525600,"summary":"Rain starting in the evening.","icon":"rain","sunriseTime":1557545040,"sunsetTime":1557599165,"moonPhase":0.23,"precipIntensity":0.3124,"precipIntensityMax":1.9152,"precipIntensityMaxTime":1557604800,"precipProbability":0.87,"precipType":"rain","temperatureHigh":20.06,"temperatureHighTime":1557579600,"temperatureLow":9.54,"temperatureLowTime":1557640800,"apparentTemperatureHigh":20.06,"apparentTemperatureHighTime":1557579600,"apparentTemperatureLow":7.35,"apparentTemperatureLowTime":1557640800,"dewPoint":8.19,"humidity":0.71,"pressure":1012.83,"windSpeed":4.1,"windGust":38.04,"windGustTime":1557608400,"windBearing":228,"cloudCover":0.64,"uvIndex":4,"uvIndexTime":1557572400,"visibility":13.76,"ozone":363.81,"temperatureMin":7.22,"temperatureMinTime":1557543600,"temperatureMax":20.06,"temperatureMaxTime":1557579600,"apparentTemperatureMin":6.79,"apparentTemperatureMinTime":1557540000,"apparentTemperatureMax":20.06,"apparentTemperatureMaxTime":1557579600}]},"flags":{"sources":["cmc","gfs","icon","isd","madis"],"nearest-station":2.243,"units":"ca"},"offset":2});
}
